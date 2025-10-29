ServerEvents.commandRegistry((event) => {
	let { commands: Commands, arguments: Arguments } = event;

	event.register(
		Commands.literal("outerlands_border")
			.requires((s) => s.hasPermission(2))
			.then(
				Commands.argument("radius", Arguments.INTEGER.create(event)).executes((c) => {
					//let { white, blue, bold, gold, aqua, red, gray } = global.formatcodes;
					let white = "§f",
						blue = "§9",
						bold = "§l",
						gold = "§6",
						aqua = "§b",
						red = "§c",
						gray = "§7";
					const {
						level,
						player: { x, y, z },
						player,
						server,
					} = c.source;

					const radius = Arguments.INTEGER.getResult(c, "radius");

					if (radius < 1 || radius > 500) {
						player.tell(red + "Radius must be between 1 and 500 blocks");
						return 0;
					}

					const maxY = level.getMaxBuildHeight() - 1;

					console.log(`Creating border with radius: ${radius}`);
					player.tell(
						`|| ==========\n` +
							`${white}||${blue + bold} Thank you for choosing Bordermaker Supreme™\n` +
							`${white}||${aqua} Creating border with radius: ${radius}.\n` +
							`${white}||${aqua} Block height: ${maxY}.\n` +
							`${white}||${gold} Please wait...`
					);
					player.tell(`${white}||${gray} Forceloading edge chunks...`);
					//Forceload the chunks around the border
					console.log(
						level.runCommandSilent(
							`forceload add -${radius} -${radius} -${radius} ${radius}`
						),
						level.runCommandSilent(
							`forceload add -${radius} -${radius} ${radius} -${radius}`
						),
						level.runCommandSilent(
							`forceload add -${radius} ${radius} ${radius} ${radius}`
						),
						level.runCommandSilent(
							`forceload add ${radius} -${radius} ${radius} ${radius}`
						)
					);

					console.info(`Forceloaded chunks for radius: ${radius}`);

					server.scheduleInTicks(10, () => {
						// Iterate over the border and set blocks
						for (let coord1 = -radius; coord1 <= radius; coord1++) {
							if ((((coord1 + radius) / (2 * radius)) * 100) % 10 == 0) {
								player.tell(
									`${white}||${gold} ${((coord1 + radius) / (2 * radius)) * 100}% done...`
								);
							}
							[-radius, radius].forEach((coord2) => {
								level.getBlock(coord1, maxY, coord2).set("minecraft:red_concrete_powder");
								level.getBlock(coord2, maxY, coord1).set("minecraft:red_concrete_powder");
							});
						}

						server.scheduleInTicks(10, () => {
							// Remove forceload from the border
							player.tell(`${white}||${gray} Removing forceload...`);
							level.runCommandSilent(`forceload remove all`);
							level.runCommandSilent(
								`playsound minecraft:entity.experience_orb.pickup master @a ${x} ${y} ${z} 1`
							);

							player.tell(
								`${white}||${aqua} Outerlands border set!\n` + `${white}|| ==========`
							);
							console.log(
								`Outerlands border created at ${radius} and forceload removed. Enjoy!`
							);
						});
					});
					return 1;
				})
			)
	);
});
