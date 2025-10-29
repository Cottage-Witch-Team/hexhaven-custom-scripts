BlockEvents.rightClicked((event) => {
	// border edges
	const SPAWN_BORDER = {
		minX: 432,
		maxX: 799,
		minZ: 640,
		maxZ: 1007,
	};

	const { player } = event;
	const { minX, maxX, minZ, maxZ } = SPAWN_BORDER;
	// check if player has warning and correct dimension
	if (
		player.isFake() ||
		player.level.isClientSide() ||
		player.stages.has("spawn_warning") ||
		player.level.dimension != "minecraft:overworld"
	)
		return;
	if (player.x > minX && player.x < maxX && player.z > minZ && player.z < maxZ) {
		// Add the stage
		player.stages.add("spawn_warning");
		let cmd = `tell ${player.username} This land is not for building! Please make sure you have passed the red dotted line before building or claiming chunks.`;
		console.log(`Player ${player.username} recieved Spawn Warning`);
		event.server.runCommand(cmd);
	}
});
