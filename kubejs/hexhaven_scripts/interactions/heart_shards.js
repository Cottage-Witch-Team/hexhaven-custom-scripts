(function () {
	const Integer = Java.loadClass("java.lang.Integer");

	const HEART_SHARD_ITEM = Item.of({
		item: "twilightforest:charm_of_life_1",
		nbt: {
			display: {
				Name: '{"text": "Heart Shard", "italic": false}',
				Lore: [
					'["A fragment of power from ", {"text": "The Heart of Hexhaven.", "color": "gold"}]',
					'"Can be obtained by interacting with the world in various ways."',
				],
			},
			"hexhaven.heart_shards.shard_item": Integer.valueOf("1"),
		},
	});

	/**
	 *
	 * @param {Internal.GroupedLootBuilder} conditions
	 */
	function withConfigToggle(conditions) {
		conditions.customCondition({
			condition: "minecraft:value_check",
			value: {
				type: "minecraft:score",
				target: {
					type: "fixed",
					name: "enable_heart_shard_drops",
				},
				score: "hexhaven.config",
			},
			range: 1,
		});
	}

	/**
	 *
	 * @param {Internal.LootModificationEventJS} event
	 * @param {string} blockId
	 * @param {number} chance
	 * @param {number} minAmount
	 * @param {number} maxAmount
	 * @param {Internal.JsonObject} extra
	 */
	function addShardBlockDropWithChance(
		event,
		blockId,
		chance,
		minAmount,
		maxAmount,
		extra
	) {
		event.addBlockLootModifier(blockId).pool((pool) => {
			pool.and((and) => {
				withConfigToggle(and.randomChance(chance));
				and.customCondition({
					condition: "minecraft:inverted",
					term: {
						condition: "minecraft:match_tool",
						predicate: {
							enchantments: [
								{
									enchantment: "minecraft:silk_touch",
								},
							],
						},
					},
				});
				if (extra !== undefined) {
					and.customCondition(extra);
				}
			});
			pool.addLoot(HEART_SHARD_ITEM.copy());
			pool.limitCount([minAmount, maxAmount]);
		});
	}

	function getScoreReference(level, objectiveName, name) {
		let scoreboard = level.getScoreboard();
		let objective = scoreboard.getObjective(objectiveName);
		if (!objective) {
			throw new Error(`Missing scoreboard objective: ${objectiveName}`);
		}
		return scoreboard.getOrCreatePlayerScore(name, objective);
	}

	const STANDARD_GOLD_ORES = [
		"minecraft:gold_ore",
		"minecraft:deepslate_gold_ore",
		"spelunkery:granite_gold_ore",
		"spelunkery:andesite_gold_ore",
		"spelunkery:diorite_gold_ore",
		"spelunkery:tuff_gold_ore",
		"deeperdarker:sculk_stone_gold_ore",
		"deeperdarker:gloomslate_gold_ore",
	];

	const NETHER_GOLD_ORES = [
		"minecraft:nether_gold_ore",
		"byg:blue_nether_gold_ore",
		"byg:brimstone_nether_gold_ore",
	];

	LootJS.modifiers((event) => {
		addShardBlockDropWithChance(event, "#forge:ores/coal", 1 / 16, 1, 1);
		addShardBlockDropWithChance(event, "#forge:ores/copper", 1 / 16, 1, 1);
		addShardBlockDropWithChance(event, "#forge:ores/iron", 1 / 8, 1, 1);
		addShardBlockDropWithChance(event, "#forge:ores/lapis", 1 / 4, 1, 1);
		addShardBlockDropWithChance(event, "#forge:ores/redstone", 1 / 4, 1, 1);
		addShardBlockDropWithChance(event, "#forge:ores/diamond", 1, 1, 1);
		addShardBlockDropWithChance(event, "#forge:ores/zinc", 1 / 8, 1, 1);
		addShardBlockDropWithChance(event, "#forge:ores/emerald", 1, 1, 2);
		addShardBlockDropWithChance(event, "#forge:ores/quartz", 1 / 8, 1, 1);

		for (let ore of STANDARD_GOLD_ORES) {
			addShardBlockDropWithChance(event, ore, 1 / 4, 1, 1);
		}

		for (let ore of NETHER_GOLD_ORES) {
			addShardBlockDropWithChance(event, ore, 1 / 8, 1, 1);
		}

		addShardBlockDropWithChance(event, "minecraft:sculk_shrieker", 1, 10, 10, {
			condition: "minecraft:block_state_property",
			block: "minecraft:sculk_shrieker",
			properties: {
				can_summon: "true",
			},
		});
		addShardBlockDropWithChance(event, "deeperdarker:ancient_vase", 1, 20, 20);
		addShardBlockDropWithChance(event, "supplementaries:urn", 1, 5, 5, {
			condition: "minecraft:block_state_property",
			block: "supplementaries:urn",
			properties: {
				treasure: "true",
			},
		});
	});

	ItemEvents.foodEaten((event) => {
		if (event.player == null || event.player.getLevel() == null) {
			return;
		}

		if (
			getScoreReference(
				event.player.getLevel(),
				"hexhaven.config",
				"enable_heart_shard_drops"
			).getScore() === 0
		) {
			return;
		}

		if (!event.item.getItem().getFoodProperties().canAlwaysEat()) {
			if (Math.random() < 1 / 3) {
				event.player.give(HEART_SHARD_ITEM.copy());
			}
		}
	});
})();
