ServerEvents.commandRegistry((event) => {
	const { commands: Commands } = event;

	event.register(
		Commands.literal("faq")
			.requires((s) => s.hasPermission(0))
			.executes((c) => faq(c.source.player))
	);

	let faq = (player) => {
		player.tell(
			Text.of("<Hexhaven> ")
				.darkGreen()
				.append(Text.of("The FAQ Book has been added to your inventory!").white())
		);
		player.give(
			Item.of("patchouli:guide_book", '{"patchouli:book":"patchouli:hexhaven_faq"}')
		);
		return 1;
	};
});
