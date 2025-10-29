BlockEvents.rightClicked((event) => {
	const { player } = event;
	if (
		player.isFake() ||
		player.level.isClientSide() ||
		player.stages.has("outerlands_build_warning") ||
		player.level.dimension != "minecraft:mining_dimension"
	)
		return;
	// Add the stage
	player.stages.add("outerlands_build_warning");
	let cmd = `tell ${player.username} Leave only footprints, take only everything that isn't nailed down. This dimension is for resource harvesting, not building or basing.`;
	console.log(`Player ${player.username} recieved Outerlands Dimension Warning`);
	event.server.runCommand(cmd);
});
