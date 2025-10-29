// hand in 1: [I; -1315364641, 473911092, -1991601715, 170335252] b19920df-1c3f-4f34-894a-91cd0a271c14
// hand in 2: [I; 742127562, -1682748335, -1712382617, -655644951] 2c3bf7ca-9bb3-4c51-99ef-1d67d8eba6e9
// hand in 3: [I; 1660521487, 966412349, -1431137045, -1491681233] 62f98c0f-399a-483d-aab2-94eba716c02f
// hand in 4: 186f1240-35fa-49ba-a75f-709452b4b0df
// hand in 5: [I; 1629073998, 1237272468, -1866564913, -1886374997] 6119b24e-49bf-4794-90be-7acf8f9033ab
// hand in 6: [I; 1102416349, -1430108181, -1810005842, 1776429559] 41b589dd-aac2-47eb-941d-80ae69e229f7
// hand in 7: [I; -1279375563, 781537184, -2090874113, -37612433] b3be4735-2e95-4fa0-835f-cafffdc2146f
// hand in 8: [I; 1801582348, -375177114, -2069762108, -553408817] 6b61f70c-e9a3-4066-84a1-efc4df03a6cf
// hand in 9: [I; -1478495090, 1294288775, -1805627588, 1535303060] a7dff48e-4d25-4787-9460-4f3c5b82dd94
// hand in 10: [I; 1730254420, -1272427419, -1232738528, -1615581355] 67219654-b428-4c65-b685-e7209fb42f55
// hand in 11: [I; -1469626688, 1499746023, -1577815357, 2099764284] a86746c0-5964-4ee7-a1f4-72c37d27dc3c

let Integer = Java.loadClass("java.lang.Integer");
let ClientboundContainerSetSlotPacket = Java.loadClass(
	"net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket"
);
let InteractionHand = Java.loadClass("net.minecraft.world.InteractionHand");

let HOTBAR_START_SLOT_NUMBER = 36;
let OFFHAND_SLOT_NUMBER = 45;

// this is sqrt(0.5^2 + 0.5^2), aka the radius of a cube along the diagonals
// meaning people can hand in items anywhere on the block
let HAND_IN_DISTANCE = 0.7071;

let SCAVENGER_STAGES = [
	{
		handIn: "b19920df-1c3f-4f34-894a-91cd0a271c14",
		clueItem: Item.of({
			item: "minecraft:cobweb",
			nbt: {
				display: {
					Lore: [
						'{"text": "An unexpected basement\'s unexpected basement", "italic": false}',
					],
					Name: '{"text": "Clue #1", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("1"),
			},
		}),
		handInMessage: { text: "It looks like our mayor is in another castle!" },
		dramtic: false,
	},
	{
		handIn: "2c3bf7ca-9bb3-4c51-99ef-1d67d8eba6e9",
		clueItem: Item.of({
			item: "comforts:sleeping_bag_white",
			nbt: {
				display: {
					Lore: [
						'{"text": "He might be sleepin\' with the", "italic": false}',
						'{"text": "fishes by now", "italic": false}',
					],
					Name: '{"text": "Clue #2", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("2"),
			},
		}),
		handInMessage: { text: "...And you got all soaking wet for that one, too :(" },
		dramatic: false,
	},
	{
		handIn: "62f98c0f-399a-483d-aab2-94eba716c02f",
		clueItem: Item.of({
			item: "luphieclutteredmod:luphie_key",
			nbt: {
				display: {
					Lore: ['{"text": "Stashed behind the bookshelves", "italic": false}'],
					Name: '{"text": "Clue #3", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("3"),
			},
		}),
		handInMessage: { text: "At least they didn’t force Mayor Gaylord into this closet." },
		dramatic: false,
	},
	{
		handIn: "186f1240-35fa-49ba-a75f-709452b4b0df",
		clueItem: Item.of({
			item: "minecraft:sunflower",
			nbt: {
				display: {
					Lore: ['{"text": "Where an admin rests eternal", "italic": false}'],
					Name: '{"text": "Clue #4", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("4"),
			},
		}),
		handInMessage: { text: "Rest In Pixels." },
		dramatic: false,
	},
	{
		handIn: "6119b24e-49bf-4794-90be-7acf8f9033ab",
		clueItem: Item.of({
			item: "alexsmobs:mungal_spores",
			nbt: {
				display: {
					Lore: ['{"text": "pretty sus", "italic": false}'],
					Name: '{"text": "Clue #5", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("5"),
			},
		}),
		handInMessage: { text: "That clue was an Imposter." },
		dramatic: false,
	},
	{
		handIn: "41b589dd-aac2-47eb-941d-80ae69e229f7",
		clueItem: Item.of({
			item: "quark:golden_apple_crate",
			nbt: {
				display: {
					Lore: ['{"text": "Ask The Heart for advice", "italic": false}'],
					Name: '{"text": "Clue #6", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("6"),
			},
		}),
		handInMessage: { text: "She said something about a dead tree?" },
		dramatic: false,
	},
	{
		handIn: "b3be4735-2e95-4fa0-835f-cafffdc2146f",
		clueItem: Item.of({
			item: "minecraft:wooden_axe",
			nbt: {
				display: {
					Lore: ['{"text": "Where a tree isn\'t", "italic": false}'],
					Name: '{"text": "Clue #7", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("7"),
			},
		}),
		handInMessage: { text: "Seems you're barking up the wrong tree here." },
		dramatic: false,
	},
	{
		handIn: "6b61f70c-e9a3-4066-84a1-efc4df03a6cf",
		clueItem: Item.of({
			item: "ars_nouveau:blank_parchment",
			nbt: {
				display: {
					Lore: ['{"text": "File this with the Town Hall", "italic": false}'],
					Name: '{"text": "Clue #8", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("8"),
			},
		}),
		handInMessage: {
			text: 'Wow, there sure are a lot of "Missing Persons" reports down here.',
		},
		dramatic: false,
	},
	{
		handIn: "a7dff48e-4d25-4787-9460-4f3c5b82dd94",
		clueItem: Item.of({
			item: "minecraft:enchanted_book",
			nbt: {
				display: {
					Lore: ['{"text": "Where knowledge was lost", "italic": false}'],
					Name: '{"text": "Clue #9", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("9"),
				StoredEnchantments: [
					{ id: "minecraft:vanishing_curse", lvl: Integer.valueOf("1") },
				],
			},
		}),
		handInMessage: [
			{ text: "This library has no books " },
			{ text: "or", italic: true },
			{ text: " frogs." },
		],
		dramatic: false,
	},
	{
		handIn: "67219654-b428-4c65-b685-e7209fb42f55",
		clueItem: Item.of({
			item: "domesticationinnovation:feather_on_a_stick",
			nbt: {
				display: {
					Lore: ['{"text": "Resting below the Little Things", "italic": false}'],
					Name: '{"text": "Clue #10", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("10"),
			},
		}),
		handInMessage: { text: "I think this might be someone else's room, actually..." },
		dramatic: false,
	},
	{
		handIn: "a86746c0-5964-4ee7-a1f4-72c37d27dc3c",
		clueItem: Item.of({
			item: "fantasyfurniture:decorations/gravestone",
			nbt: {
				display: {
					Lore: ['{"text": "He\'s not... dead, is he?", "italic": false}'],
					Name: '{"text": "Clue #11", "italic": false}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("11"),
			},
		}),
		handInMessage: { text: "He's definitely alive!" },
		dramatic: true,
	},
	{
		handIn: "#hexhaven.blessbane.minotaur_body",
		clueItem: Item.of({
			item: "nightlights:frog_brown",
			nbt: {
				display: {
					Lore: [
						'{"text": "Right click the minotaur to swap this Decoy for Mayor Gaylord!", "italic": false, "color": "gold"}',
					],
					Name: '{"text": "The Minotaur Has Him!", "italic": false, "color": "yellow"}',
				},
				"hexhaven.blessbane.clue_item": Integer.valueOf("12"),
			},
		}),
		// this one uses special hand-in logic
		handInMessage: null,
		dramatic: null,
	},
];

let SCAVENGER_OBSESSED_THRESHOLD = 10;
let SCAVENGER_FIRST_WIN_MESSAGE = { text: "You've done it, you saved the mayor!" };
let SCAVENGER_REPEAT_WIN_MESSAGE = {
	text: "You've saved the mayor already, but congrats on solving the puzzle again!",
};
let SCAVENGER_OBSESSED_WIN_MESSAGE = {
	text: "You know there's no alternate endings here, right? You beat it.",
};

let SCAVENGER_REWARD = Item.of({
	item: "kubejs:mayor_gaylord",
});

// i'm not happy with having to duplicate the turn in logic inside a function command
// but tbh i don't trust myself to rewrite the /clear command properly from scratch
let CLICKABLE_BLOCKS = {
	// quest start button: 14613 94 -14637
	"14613 94 -14637": (event) => {
		event.server.runCommandSilent(
			`execute as ${
				event.getEntity().username
			} at @s run function hexhaven:blessbane/start_scavenger_hunt`
		);
	},

	// sus mode button: 14589 99 -14595
	"14589 99 -14595": (event) => {
		event.server.runCommandSilent(
			`execute as ${
				event.getEntity().username
			} at @s run function hexhaven:blessbane/try_submit_sus_scavenger_clue`
		);
	},

	// The Heart fence gate: 14637 99 -14557
	"14637 99 -14557": (event) => {
		event.server.runCommandSilent(
			`execute as ${
				event.getEntity().username
			} at @s run function hexhaven:blessbane/try_submit_heart_scavenger_clue`
		);
	},

	// curse of vanishing lectern: 14603 104 -14592
	"14603 104 -14592": (event) => {
		event.server.runCommandSilent(
			`execute as ${
				event.getEntity().username
			} at @s run function hexhaven:blessbane/try_submit_lectern_scavenger_clue`
		);
	},
};

let ECHOFOLK_LORE = {
	// Selris
	"ad032634-4c8b-46ab-8959-93ad46583b35": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"\\nSunsets in the "},{"text":"Outerlands","bold":true},{"text":" just look\\u2026 different. More special? I may be the ","color":"reset"},{"text":"first person","italic":true},{"text":" to ever see this horizon.\\n\\nThere\\u2019s some sort of structure in the distance, down by the water.","color":"reset"}]',
				'{"text":"I know I\\u2019ve got to be careful about loading new chunks. But it doesn\\u2019t look that far...?\\n\\nAnd\\u2026 No one has ever set foot there before. It\'s fully unlooted.\\n\\nNo. There\\u2019s too many people online. I\\u2019ve come far enough, it\'s time to warp hom-"}',
				'["",{"text":"\\n\\n\\n\\n\\n"},{"text":"OH MY GODS IS THAT A BLACK LOBSTER I SEE ","bold":true,"italic":true}]',
			],
			title: "Selris",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Niq
	"681b866b-f2ae-4e14-95c4-4d39b7b73c3e": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"All that\\u2019s left are the final touches. This roof has taken most of the evening, I just need to get it finished "},{"text":"before the server reset","italic":true},{"text":".\\n\\nSure, maybe ","color":"reset"},{"text":"rough diamond","bold":true,"color":"aqua"},{"text":" is an expensive build material- but it\\u2019ll all be worth it for the finished look.","color":"reset"}]',
				'["",{"text":"\\n\\u231b "},{"text":"Server will restart in one minute. ","italic":true},{"text":"\\u231b\\n\\nOkay. The ","color":"reset"},{"text":"one minute warning","bold":true},{"text":". That\\u2019s fine, I\\u2019m almost done.\\n\\nI just need to\\u2026 scaffold up to that tower\\u2026","color":"reset"}]',
				'["",{"text":"There. "},{"text":"I did it","bold":true},{"text":". It looks so good! I can\\u2019t wait to show it off.\\n\\nWhat\\u2019s the time? A minute after? Looks like I finished ","color":"reset"},{"text":"just in ti","italic":true},{"text":"-","color":"reset"}]',
			],
			title: "Niq",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Astrella
	"af0704bf-85cd-45ac-a564-9a51643eea44": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"I\\u2019ll never forget this moment.\\n\\nBeing here with the person who "},{"text":"means the world","bold":true},{"text":" to me.\\n\\nThat\\u2019s all that really matters- it\\u2019s the only reason I log on every day.","color":"reset"}]',
				'["",{"text":"Watching their "},{"text":"excitement","bold":true,"color":"dark_purple"},{"text":", their ","color":"reset"},{"text":"creativity","bold":true,"color":"dark_aqua"},{"text":", listening to them rave about their ","color":"reset"},{"text":"next big idea","bold":true,"color":"blue"},{"text":".\\n\\nSo what if it\\u2019s not the ","color":"reset"},{"text":"\\u201creal world\\u201d","italic":true},{"text":"? It\\u2019s real enough for me.","color":"reset"}]',
			],
			title: "Astrella",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Bo
	"c2f3e15d-6052-4ae3-9f33-f7c777ba331b": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"A DRAGON","bold":true,"color":"dark_red"},{"text":"! Oh my gods I didn\\u2019t know there would be ","color":"reset"},{"text":"dragons","italic":true},{"text":" here.\\n\\nCan I tame it?\\n\\nHow do I tame it?","color":"reset"}]',
				'["",{"text":"Bo was slain by Dragon.\\nBo was slain by Dragon.\\nBo was slain by Dragon.\\nBo was slain by Dragon.\\nBo was slain by Dragon.\\nBo was slain by Dragon.","italic":true},{"text":"\\n ","color":"reset"}]',
			],
			title: "Bo",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Rhodes
	"349a0eb8-7f0f-41a1-b6b4-568df4f88a1d": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"I can\\u2019t believe I\\u2019m the "},{"text":"only one online","italic":true},{"text":". This never happens.\\n\\n\\u201cHello!\\u201d\\n\\u201clol\\u201d\\n\\u201c\\u2026\\u201d\\n\\nKinda eerie, being alone on the server. At least I can do whatever I want without worrying about the server timing ou-","color":"reset"}]',
			],
			title: "Rhodes",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Loni
	"84a2e197-d6a0-4e7b-a4de-5973b7b5bb5b": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"\\u2026And that should be the last book.\\n\\n"},{"text":"Phew.","italic":true},{"text":"\\n\\nFully enchanted ","color":"reset"},{"text":"Warden armor","bold":true,"color":"dark_blue"},{"text":". So shiny!\\n\\nNow to equip it underneath my cosmetic armor, where it will ","color":"reset"},{"text":"never be seen again","italic":true},{"text":".","color":"reset"}]',
			],
			title: "Loni",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Daniel
	"26a1e0b4-c371-418c-9a37-eed76d62b20f": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"My inventory is packed, my backpack is full, but I am "},{"text":"not leaving this tomb","italic":true},{"text":" without every single ","color":"reset"},{"text":"spawner","bold":true},{"text":" and ","color":"reset"},{"text":"zombie head","bold":true},{"text":".\\n\\nOoh, and the ","color":"reset"},{"text":"candles","bold":true},{"text":".\\n\\nAnd the ","color":"reset"},{"text":"chains","bold":true},{"text":".\\n\\nYep, and the ","color":"reset"},{"text":"cobwebs ","bold":true},{"text":"of course.","color":"reset"}]',
				'["",{"text":"Gotta grab that "},{"text":"rotten flesh","bold":true},{"text":".\\n\\nOoh, ","color":"reset"},{"text":"gold nuggets","bold":true},{"text":"!\\n\\n","color":"reset"},{"text":"Sticks","bold":true},{"text":", those are useful\\u2026 a level 1 ","color":"reset"},{"text":"Sharpness","bold":true},{"text":" book\\u2026\\n\\nI might ","color":"reset"},{"text":"need","italic":true},{"text":" this stuff some day. I\\u2019m not leaving all these treasures behind!","color":"reset"}]',
			],
			title: "Daniel",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Sybil
	"b3c9e07b-41c7-4275-8309-ab1c1d7f6dab": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"I wish I could remember how to get to the "},{"text":"Warp Nexus","bold":true,"color":"dark_purple"},{"text":". This is a long walk.","color":"reset"}]',
			],
			title: "Sybil",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Zyrus
	"60e12973-3dd1-493b-9175-c2eee5aa6c8a": Item.of({
		item: "minecraft:written_book",
		nbt: {
			pages: [
				'["",{"text":"Phew, I don\\u2019t know "},{"text":"how","italic":true},{"text":" I managed to survive the past two timeouts.\\n\\nGuess I\\u2019m just ","color":"reset"},{"text":"built different","bold":true},{"text":".\\n\\nNow why isn\\u2019t any of this ","color":"reset"},{"text":"cobblestone","italic":true},{"text":" breaking\\u2026","color":"reset"}]',
			],
			title: "Zyrus",
			author: "Hexhaven",
			display: {
				Lore: ['{"color":"gold","text":"The memory fragment of an Echofolk."}'],
			},
		},
	}),
	// Tutorial Guy
	"11270184-f1f7-4ca2-bee2-8300f640b193": Item.of({
		item: "minecraft:written_book",
		nbt: {
			author: "Emmulah",
			pages: [
				'{"text":"§2§l§nThe Echofolk§0\\n\\nRemnants of corrupted player data, the §lEchofolk§0 are the memories of moments wiped from the server by timeouts, crashes, and rollbacks. \\n\\n§lEchofolk§0 exist with a only a tenuous tie to reality..."}',
				'{"text":"Much like Blessbane itself.\\n\\nThey cannot see or hear you, and they seem to move with no purpose or intent.\\n\\nSometimes §lEchofolk§0 disappear, and sometimes they come back. No one knows where they go.\\n "}',
				'{"text":"§2§l§nLost Items§0\\n\\nRumours of a §oShadow Coven§0 that steal items and pets from players during timeouts are often attributed to the  §lEchofolk§0. \\n\\nThe truth, however, is more complicated.\\n\\nTimeouts result in a thinning of the veil, "}',
				'{"text":"causing our worlds to collide. Blessbane is a leech, always §4§o§ltaking§0. When it captures memories, they become §lEchofolk§0. \\n\\nSometimes it takes §oplayer builds§0 and they become landmarks.  \\n\\nIf it can find neither of these, Blessbane will just shake out"}',
				'{"text":"our pockets for loose items and return with those.\\n\\nIn a sense, §lEchofolk§0 are still you, and the items that go missing do, technically, still belong to them. \\n\\nTo §oexperience the memory§0 of an §lEchofolk§0, right-click them with a blank book."}',
				"{\"text\":\"\\n(~'o')~\\n\\n~('o'~)\\n\\n(~'o')~\\n\\n~('o'~)\\n\\n(~'o')~\\n\\n§4§l§nDISCLAIMER§0\\n\\n----------------->  \"}",
				'{"text":"This is just some fun  §oworld-building lore§0 to ease the frustration of server timeouts. No one likes losing the stuff they worked hard to build or get!\\n\\nNone of these characters or items are meant to reflect any §oactual player§0 on \\nthis server, past or present."}',
				'{"text":""}',
				'{"text":"Also, if you lost something due to the server pooping its pants, I\'m sorry... you won\'t find them here.\\n\\n:("}',
			],
			title: "The Echofolk",
		},
	}),
};

function getPlayerScoreReference(objectiveName, player) {
	let level = player.getLevel();
	let scoreboard = level.getScoreboard();
	let objective = scoreboard.getObjective(objectiveName);
	if (!objective) {
		throw new Error(`Missing scoreboard objective: ${objectiveName}`);
	}
	return scoreboard.getOrCreatePlayerScore(player.username, objective);
}

function handlePlayerWin(player) {
	player.server.runCommandSilent(
		`execute as ${player.username} at @s run playsound minecraft:ui.toast.challenge_complete master @s`
	);
	let completionScore = getPlayerScoreReference(
		"hexhaven.blessbane.scavenger_completion_count",
		player
	);
	if (completionScore.getScore() === 0) {
		player.displayClientMessage(SCAVENGER_FIRST_WIN_MESSAGE, true);
		player.give(SCAVENGER_REWARD.copy());
	} else if (completionScore.getScore() < SCAVENGER_OBSESSED_THRESHOLD) {
		player.displayClientMessage(SCAVENGER_REPEAT_WIN_MESSAGE, true);
	} else {
		player.displayClientMessage(SCAVENGER_OBSESSED_WIN_MESSAGE, true);
	}
	completionScore.increment();
}

let droppedClueItems = [];

ServerEvents.tick((event) => {
	for (let i = droppedClueItems.length - 1; i >= 0; i--) {
		let entry = droppedClueItems[i];
		let itemEntity = entry.itemEntity;
		let clueNumber = entry.clueNumber;
		let thrower = entry.thrower;

		// remove stale item entities from the update list
		if (!itemEntity.isAddedToWorld()) {
			droppedClueItems.splice(i, 1);
			continue;
		}

		let level = itemEntity.getLevel();
		let scavengerScore = getPlayerScoreReference(
			"hexhaven.blessbane.scavenger_progress",
			thrower
		);
		if (scavengerScore.getScore() !== clueNumber) {
			continue;
		}

		let stageEntry = SCAVENGER_STAGES[clueNumber - 1];
		if (!stageEntry) {
			throw new Error(`Player ${thrower.username} has invalid scavenger hunt stage!`);
		}

		let handInEntity;
		if (stageEntry.handIn.startsWith("#")) {
			let searchTag = stageEntry.handIn.slice(1);
			for (let entity of level.getEntities()) {
				if (entity.getTags().contains(searchTag)) {
					handInEntity = entity;
					break;
				}
			}
		} else {
			handInEntity = level.getEntity(stageEntry.handIn);
		}

		if (handInEntity && itemEntity.distanceToEntity(handInEntity) < HAND_IN_DISTANCE) {
			itemEntity.kill();
			scavengerScore.increment();
			if (clueNumber == SCAVENGER_STAGES.length) {
				handlePlayerWin(thrower);
			} else {
				let nextStage = SCAVENGER_STAGES[clueNumber];
				if (stageEntry.dramatic) {
					thrower.server.runCommandSilent(
						`execute as ${thrower.username} at @s run playsound minecraft:entity.frog.hurt master @s`
					);
					thrower.server.runCommandSilent(
						`execute as ${thrower.username} at @s run playsound ambientsounds:animals.warden master @s`
					);
					thrower.displayClientMessage(stageEntry.handInMessage, true);
					event.server.scheduleInTicks(20 * 1, () => {
						thrower.server.runCommandSilent(
							`execute as ${thrower.username} at @s run playsound twilightforest:entity.twilightforest.alphayeti.roar master @s`
						);
						thrower.give(nextStage.clueItem.copy());
					});
				} else {
					thrower.server.runCommandSilent(
						`execute as ${thrower.username} at @s run playsound minecraft:entity.frog.hurt master @s`
					);
					thrower.displayClientMessage(stageEntry.handInMessage, true);
					thrower.give(nextStage.clueItem.copy());
				}
			}
		}
	}
});

BlockEvents.rightClicked((event) => {
	let item = event.getItem();
	let block = event.block;
	let player = event.getEntity();

	if (block.dimension === "minecraft:the_end") {
		let blockCoords = `${block.x} ${block.y} ${block.z}`;
		if (blockCoords in CLICKABLE_BLOCKS) {
			CLICKABLE_BLOCKS[blockCoords](event);
			return;
		}
	}

	if (item.isEmpty()) {
		return;
	}

	if (item.nbt && "hexhaven.blessbane.clue_item" in item.nbt) {
		let clueNumber = item.nbt["hexhaven.blessbane.clue_item"];

		// we want people to be able to click on special stuff using the item otherwise it feels buggy
		if (!player.isShiftKeyDown()) {
			if (block.hasTag("minecraft:doors")) {
				return;
			}
			if (block.hasTag("minecraft:buttons")) {
				return;
			}
			if (block.hasTag("minecraft:trapdoors")) {
				return;
			}
			if (block.hasTag("minecraft:fence_gates")) {
				return;
			}
			if (block.hasTag("dramaticdoors:tall_doors")) {
				return;
			}
			if (block.hasTag("dramaticdoors:short_doors")) {
				return;
			}
		}

		// Canceling the event prevents people from accidentily placing down clue items (and thus forcing them to reset the scavenger hunt cuz they lose the nbt).
		// HOWEVER, there is an issue, which is that we can only cancel it on the server,
		// meaning the client thinks it placed the block and thus gets out of sync.
		// We forcibly resync the client here by sending it a packet,
		// however kubejs is cursed and calling event.cancel() forcibly ends the event handler,
		// so i'm just using a scheduled callback here to resync the client inventory *after* cancelling the event.
		event.server.scheduleInTicks(1, (callback) => {
			let connection = player.connection;
			if (event.getHand() === InteractionHand.OFF_HAND) {
				// see https://wiki.vg/Protocol#Set_Container_Slot for what this is supposed to do
				// idk if using 0 for StateID is valid or not but it seems to work :shrug:
				connection.send(
					new ClientboundContainerSetSlotPacket(0, 0, OFFHAND_SLOT_NUMBER, item)
				);
			} else {
				let slot = player.getSelectedSlot();
				connection.send(
					new ClientboundContainerSetSlotPacket(
						0,
						0,
						HOTBAR_START_SLOT_NUMBER + slot,
						item
					)
				);
			}
		});
		event.cancel();
	}
});

ItemEvents.dropped((event) => {
	let item = event.getItem();
	if (item.nbt && "hexhaven.blessbane.clue_item" in item.nbt) {
		let clueNumber = item.nbt["hexhaven.blessbane.clue_item"];
		let itemEntity = event.getItemEntity();
		droppedClueItems.push({
			itemEntity: itemEntity,
			clueNumber: clueNumber,
			thrower: event.getEntity(),
		});
	}
});

ItemEvents.entityInteracted((event) => {
	if (event.item.isEmpty()) {
		return;
	}

	let uuid = event.target.stringUuid;
	if (
		event.target.getTags().contains("hexhaven.blessbane.minotaur_body") ||
		event.target.getTags().contains("hexhaven.blessbane.minotaur_head")
	) {
		if (
			event.item.nbt &&
			event.item.nbt["hexhaven.blessbane.clue_item"] === SCAVENGER_STAGES.length
		) {
			let level = event.player.getLevel();
			let scavengerScore = getPlayerScoreReference(
				"hexhaven.blessbane.scavenger_progress",
				event.player
			);
			if (scavengerScore.getScore() !== SCAVENGER_STAGES.length) {
				return;
			}
			scavengerScore.increment();
			event.item.setCount(0);
			handlePlayerWin(event.player);
		}
	} else if (event.item.id === "minecraft:book" && uuid in ECHOFOLK_LORE) {
		let loreItem = ECHOFOLK_LORE[uuid].copy();
		event.item.count--;
		event.player.give(loreItem);
	}
});
