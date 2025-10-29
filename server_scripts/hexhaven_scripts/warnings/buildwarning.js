BlockEvents.rightClicked((event) => {
	const OUTERLANDS_BORDER = 10240;
	const { player } = event;
	if (
		player.isFake() ||
		player.level.isClientSide() ||
		player.stages.has("build_warning")
	)
		return;
	if (Math.abs(player.x) > OUTERLANDS_BORDER || Math.abs(player.z) > OUTERLANDS_BORDER) {
		// Add the stage
		player.stages.add("build_warning");
		let cmd = `tell ${player.username} Chunks outside of 10,240 blocks are reset every 3 months. Builds outside that area will be erased.`;
		console.log(`Player ${player.username} recieved Outerlands Border Warning`);
		event.server.runCommand(cmd);
	}
});
