ServerEvents.commandRegistry((event) => {
	const THIRTYMIN_COMMAND_NAME = "thirtyminutes";
	const FIVEMIN_COMMAND_NAME = "fiveminutes";
	const ONEMIN_COMMAND_NAME = "oneminute";

	const { commands: Commands } = event;

	function serverRestartIn(server, mins) {
		server.runCommandSilent(`title @a times 20 100 20`);
		server.runCommandSilent(`title @a subtitle {"text":"in ${mins}"}`);
		server.runCommandSilent(`title @a title {"text":"Server Restart","color":"red"}`);
		return 1;
	}

	event.register(
		Commands.literal(THIRTYMIN_COMMAND_NAME)
			.requires((s) => s.hasPermission(2))
			.executes((c) => serverRestartIn(c.source.server, "30 minutes"))
	);

	event.register(
		Commands.literal(FIVEMIN_COMMAND_NAME)
			.requires((s) => s.hasPermission(2))
			.executes((c) => serverRestartIn(c.source.server, "5 minutes"))
	);

	event.register(
		Commands.literal(ONEMIN_COMMAND_NAME)
			.requires((s) => s.hasPermission(2))
			.executes((c) => serverRestartIn(c.source.server, "1 minute"))
	);
});
