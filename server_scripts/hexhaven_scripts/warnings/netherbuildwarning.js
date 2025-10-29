BlockEvents.rightClicked((event) => {
	const NETHER_BORDER = 1536;
	const { player } = event;
	if (
		player.isFake() ||
		player.level.isClientSide() ||
		player.stages.has("nether_build_warning") ||
		player.level.dimension != "minecraft:the_nether"
	)
		return;

	if (Math.abs(player.x) < NETHER_BORDER && Math.abs(player.z) < NETHER_BORDER) {
		// Add the stage
		player.stages.add("nether_build_warning");
		let cmd = `tell ${player.username} Please respect the chunks inside the Nether Build Border. Destructive exploration should be limited to areas further than 1,536 blocks out.`;
		console.log(`Player ${player.username} recieved Nether Build Warning`);
		event.server.runCommand(cmd);
	}
});
