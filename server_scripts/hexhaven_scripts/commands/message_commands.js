////////////////////////////////////////////////////////
// Commands to send links to Feedback Channel and Shops Sheet //
////////////////////////////////////////////////////////

// Feedback channel: https://discord.com/channels/1076365835284787220/1374556581991022624

// Shops Spreadsheet: https://docs.google.com/spreadsheets/d/1jJRr9RegeHf5BZNCnkkERnaiKoMr5YZIA-ew9LD1gt8/

ServerEvents.commandRegistry((event) => {
	// Message from hexhaven
	let hexhavenChat = Text.of("<Hexhaven> ").darkGreen();

	// Feedback message
	let feedbackUrl =
		"https://discord.com/channels/1076365835284787220/1374556581991022624";
	let feedbackText = hexhavenChat
		.copy()
		.append(
			Text.of(
				"Found a bug? Have an idea for a change? Want to request a feature? Let us know in the "
			).white()
		)
		.append(textUrl("Feedback Channel", feedbackUrl, "Opens in Discord"))
		.append(Text.of("!").white());

	// Shop sheet message
	let shopsUrl =
		"https://docs.google.com/spreadsheets/d/1jJRr9RegeHf5BZNCnkkERnaiKoMr5YZIA-ew9LD1gt8/";
	let shopsText = hexhavenChat
		.copy()
		.append(Text.of("Find the Shop Spreadsheet ").white())
		.append(textUrl("here", shopsUrl, "Opens sheet in browser"))
		.append(Text.of("!").white());

	// Create commands
	event.register(createMessageCommand(event, "feedback", feedbackText));
	event.register(createMessageCommand(event, "shops_spreadsheet", shopsText));
});

/**
 *
 * @param {Internal.CommandRegistryEventJS} event
 * @param {string} name
 * @param {string} text
 * @returns
 */
function createMessageCommand(event, name, text) {
	let { commands: Commands, arguments: Arguments } = event;
	return Commands.literal(name)
		.requires((s) => s.hasPermission(0))
		.executes((c) => {
			c.source.player.tell(text);
			return 1;
		})
		.then(
			Commands.argument("player", Arguments.PLAYER.create(event))
				.requires((s) => s.hasPermission(2))
				.executes((c) => {
					let playerToTell = Arguments.PLAYER.getResult(c, "player");
					playerToTell.tell(text);
					return 1;
				})
		);
}

/**
 *
 * @param {string} text
 * @param {string} url
 * @param {string} hover
 * @returns
 */
function textUrl(text, url, hover) {
	return Text.of(text).blue().underlined().clickOpenUrl(url).hover(hover);
}
