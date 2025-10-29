ServerEvents.recipes((event) => {
	// Removal of all Refined Storage crafting recipes
	// NOTE: This needs to occur to properly cull all original uncrafting recipes
	event.remove({ mod: "refinedstorage" });

	/// Refined Storage Uncrafting Recipes

	// Format converter helper function, takes the `key` argument of the uncrafting recipe and transforms it into a happy, nested, custom recipe key
	function convertFormat(input) {
		let output = {};

		for (const key in input) {
			if (input[key].startsWith("#")) {
				output[key] = { tag: input[key].substring(1) };
			} else {
				output[key] = { item: input[key] };
			}
		}

		return output;
	}

	// Uncrafting helper function, takes in arguments formatted as if they were a default KubeJS recipe
	// NOTE: Cost will always be free
	let uncrafting = (ingredient, count, pattern, key) => {
		event
			.custom({
				type: "twilightforest:uncrafting",
				cost: 0,
				count: count,
				ingredient: {
					item: ingredient,
				},
				key: convertFormat(key),
				pattern: pattern,
			})
			.id(`earl:free_uncrafting_${ingredient.split(":").pop()}`);
	};

	// Constant color strings
	let COLORS = [
		"white",
		"orange",
		"magenta",
		"yellow",
		"lime",
		"pink",
		"gray",
		"light_gray",
		"cyan",
		"purple",
		"blue",
		"brown",
		"green",
		"red",
		"black",
	];

	// Constant machine type strings
	let MACHINES = [
		"creative_controller",
		"grid",
		"crafting_grid",
		"network_receiver",
		"network_transmitter",
		"relay",
		"detector",
		"security_manager",
		"wireless_transmitter",
		"disk_manipulator",
	];

	// List of uncrafting recipes to make
	let allUncraftingList = [
		[
			"refinedstorage:creative_controller",
			1,
			["ABA", "CEC", "ADA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:lodestone",
				C: "refinedstorage:silicon",
				D: "refinedstorage:machine_casing",
				E: "ars_creo:starbuncle_wheel",
			},
		],
		[
			"refinedstorage:cable",
			12,
			["AAA", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "glassential:glass_redstone",
				C: "minecraft:glowstone_dust",
			},
		],
		[
			"refinedstorage:network_receiver",
			1,
			["AFA", "BED", "CCC"],
			{
				A: "refinedstorage:advanced_processor",
				B: "refinedstorage:construction_core",
				C: "minecraft:ender_pearl",
				D: "refinedstorage:destruction_core",
				E: "refinedstorage:machine_casing",
				F: "ars_nouveau:glyph_redstone_signal",
			},
		],
		[
			"refinedstorage:network_transmitter",
			1,
			["CCC", "BED", "AFA"],
			{
				A: "refinedstorage:advanced_processor",
				B: "refinedstorage:construction_core",
				C: "minecraft:ender_pearl",
				D: "refinedstorage:destruction_core",
				E: "refinedstorage:machine_casing",
				F: "ars_nouveau:glyph_redstone_signal",
			},
		],
		[
			"refinedstorage:storage_housing",
			1,
			["CCC", "CAC", "BBB"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "glassential:glass_redstone",
				C: "minecraft:stone",
			},
		],
		[
			"refinedstorage:upgrade",
			1,
			["ABA", "ACA", "ABA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "glassential:glass_redstone",
				C: "refinedstorage:improved_processor",
			},
		],
		[
			"refinedstorage:1k_storage_part",
			1,
			[" C ", "CAC", " C "],
			{
				A: "refinedstorage:quartz_enriched_iron",
				C: "refinedstorage:basic_processor",
			},
		],
		[
			"refinedstorage:1k_storage_disk",
			1,
			["DBD", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "glassential:glass_redstone",
				C: "refinedstorage:1k_storage_part",
				D: "minecraft:stone",
			},
		],
		[
			"refinedstorage:4k_storage_disk",
			1,
			["DBD", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "glassential:glass_redstone",
				C: "refinedstorage:4k_storage_part",
				D: "minecraft:stone",
			},
		],
		[
			"refinedstorage:16k_storage_disk",
			1,
			["DBD", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "glassential:glass_redstone",
				C: "refinedstorage:16k_storage_part",
				D: "minecraft:stone",
			},
		],
		[
			"refinedstorage:64k_storage_disk",
			1,
			["DBD", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "glassential:glass_redstone",
				C: "refinedstorage:64k_storage_part",
				D: "minecraft:stone",
			},
		],
		[
			"refinedstorage:creative_wireless_grid",
			1,
			["ABA", "ACA", "ABA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:ender_pearl",
				C: "#refinedstorage:grid",
			},
		],
		[
			"refinedstorageaddons:creative_wireless_crafting_grid",
			1,
			["ABA", "ACA", "ABA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:ender_pearl",
				C: "#refinedstorage:crafting_grid",
			},
		],
		[
			"rsinfinitybooster:infinity_card",
			1,
			[" B ", "BCB", " B "],
			{
				B: "refinedstorage:range_upgrade",
				C: "minecraft:nether_star",
			},
		],
		[
			"rsinfinitybooster:dimension_card",
			1,
			[" A ", "BCD", " E "],
			{
				A: "twilightforest:maze_map_focus",
				B: "deeperdarker:heart_of_the_deep",
				C: "rsinfinitybooster:infinity_card",
				D: "minecraft:dragon_egg",
				E: "minecraft:netherite_ingot",
			},
		],
		[
			"refinedstorage:quartz_enriched_iron",
			8,
			["AA ", "AB ", "   "],
			{
				A: "minecraft:iron_ingot",
				B: "minecraft:glowstone_dust",
			},
		],
		[
			"refinedstorage:quartz_enriched_iron_block",
			1,
			["AAA", "AAA", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
			},
		],
		[
			"refinedstorageaddons:creative_wireless_crafting_grid",
			1,
			["AB ", "   ", "   "],
			{
				A: "refinedstorage:creative_wireless_grid",
				B: "minecraft:crafting_table",
			},
		],
		[
			"refinedstorage:1k_storage_disk",
			1,
			["AB ", "   ", "   "],
			{
				A: "refinedstorage:1k_storage_part",
				B: "refinedstorage:storage_housing",
			},
		],
		[
			"refinedstorage:4k_storage_disk",
			1,
			["AB ", "   ", "   "],
			{
				A: "refinedstorage:4k_storage_part",
				B: "refinedstorage:storage_housing",
			},
		],
		[
			"refinedstorage:16k_storage_disk",
			1,
			["AB ", "   ", "   "],
			{
				A: "refinedstorage:16k_storage_part",
				B: "refinedstorage:storage_housing",
			},
		],
		[
			"refinedstorage:64k_storage_disk",
			1,
			["AB ", "   ", "   "],
			{
				A: "refinedstorage:64k_storage_part",
				B: "refinedstorage:storage_housing",
			},
		],
		[
			"refinedstorage:grid",
			1,
			["ABC", "DEC", "AFC"],
			{
				A: "refinedstorage:improved_processor",
				B: "refinedstorage:construction_core",
				C: "#forge:glass",
				D: "refinedstorage:quartz_enriched_iron",
				E: "refinedstorage:machine_casing",
				F: "refinedstorage:destruction_core",
			},
		],
		[
			"refinedstorage:crafting_grid",
			1,
			["AB ", "C  ", "   "],
			{
				A: "refinedstorage:grid",
				B: "refinedstorage:advanced_processor",
				C: "minecraft:crafting_table",
			},
		],
		[
			"refinedstorage:relay",
			1,
			["AB ", "C  ", "   "],
			{
				A: "refinedstorage:machine_casing",
				B: "refinedstorage:cable",
				C: "minecraft:redstone_torch",
			},
		],
		[
			"refinedstorage:detector",
			1,
			["ABA", "CDC", "AEA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:redstone_torch",
				C: "minecraft:comparator",
				D: "refinedstorage:machine_casing",
				E: "refinedstorage:improved_processor",
			},
		],
		[
			"refinedstorage:security_manager",
			1,
			["ABA", "CDC", "ACA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:chest",
				C: "refinedstorage:security_card",
				D: "refinedstorage:machine_casing",
			},
		],
		[
			"refinedstorage:wireless_transmitter",
			1,
			["ABA", "ACA", "ADA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:ender_pearl",
				C: "refinedstorage:machine_casing",
				D: "refinedstorage:advanced_processor",
			},
		],
		[
			"refinedstorage:disk_manipulator",
			1,
			["ABA", "CDE", "ABA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "refinedstorage:storage_housing",
				C: "refinedstorage:construction_core",
				D: "refinedstorage:machine_casing",
				E: "refinedstorage:destruction_core",
			},
		],
		[
			"refinedstorage:construction_core",
			1,
			["AB ", "   ", "   "],
			{
				A: "refinedstorage:basic_processor",
				B: "minecraft:glowstone_dust",
			},
		],
		[
			"refinedstorage:destruction_core",
			1,
			["AB ", "   ", "   "],
			{
				A: "refinedstorage:basic_processor",
				B: "minecraft:quartz",
			},
		],
		[
			"refinedstorage:processor_binding",
			8,
			["   ", "ABA", "   "],
			{
				A: "#forge:string",
				B: "#forge:slimeballs",
			},
		],
		[
			"refinedstorage:basic_processor",
			1,
			["AB ", "CD ", "   "],
			{
				A: "refinedstorage:processor_binding",
				B: "minecraft:iron_ingot",
				C: "refinedstorage:silicon",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:raw_basic_processor",
			1,
			["AB ", "CD ", "   "],
			{
				A: "refinedstorage:processor_binding",
				B: "minecraft:iron_ingot",
				C: "refinedstorage:silicon",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:improved_processor",
			1,
			["AB ", "CD ", "   "],
			{
				A: "refinedstorage:processor_binding",
				B: "minecraft:gold_ingot",
				C: "refinedstorage:silicon",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:raw_improved_processor",
			1,
			["AB ", "CD ", "   "],
			{
				A: "refinedstorage:processor_binding",
				B: "minecraft:gold_ingot",
				C: "refinedstorage:silicon",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:advanced_processor",
			1,
			["AB ", "CD ", "   "],
			{
				A: "refinedstorage:processor_binding",
				B: "minecraft:diamond",
				C: "refinedstorage:silicon",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:raw_advanced_processor",
			1,
			["AB ", "CD ", "   "],
			{
				A: "refinedstorage:processor_binding",
				B: "minecraft:diamond",
				C: "refinedstorage:silicon",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:silicon",
			1,
			["A  ", "   ", "   "],
			{
				A: "minecraft:quartz",
			},
		],
		[
			"refinedstorage:security_card",
			1,
			["AAA", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "refinedstorage:network_card",
				C: "refinedstorage:advanced_processor",
			},
		],
		[
			"refinedstorage:network_card",
			1,
			["AAA", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:paper",
				C: "refinedstorage:advanced_processor",
			},
		],
		[
			"refinedstorage:4k_storage_part",
			1,
			["ABA", "CDC", "ACA"],
			{
				A: "refinedstorage:basic_processor",
				B: "refinedstorage:quartz_enriched_iron",
				C: "refinedstorage:1k_storage_part",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:16k_storage_part",
			1,
			["ABA", "CDC", "ACA"],
			{
				A: "refinedstorage:improved_processor",
				B: "refinedstorage:quartz_enriched_iron",
				C: "refinedstorage:4k_storage_part",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:64k_storage_part",
			1,
			["ABA", "CDC", "ACA"],
			{
				A: "refinedstorage:advanced_processor",
				B: "refinedstorage:quartz_enriched_iron",
				C: "refinedstorage:16k_storage_part",
				D: "minecraft:redstone",
			},
		],
		[
			"refinedstorage:speed_upgrade",
			1,
			["ABA", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:sugar",
				C: "refinedstorage:upgrade",
			},
		],
		[
			"refinedstorage:range_upgrade",
			1,
			["ABA", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:ender_pearl",
				C: "refinedstorage:upgrade",
			},
		],
		[
			"refinedstorage:stack_upgrade",
			1,
			["ABA", "BAB", "ABA"],
			{
				A: "minecraft:sugar",
				B: "refinedstorage:speed_upgrade",
			},
		],
		[
			"refinedstorage:regulator_upgrade",
			1,
			["ADA", "BCB", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:redstone",
				C: "refinedstorage:upgrade",
				D: "minecraft:comparator",
			},
		],
		[
			"refinedstorage:filter",
			1,
			["ABA", "BCB", "ABA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:paper",
				C: "minecraft:hopper",
			},
		],
		[
			"refinedstorage:wrench",
			1,
			["ABA", "AAA", " A "],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "refinedstorage:basic_processor",
			},
		],
		[
			"refinedstorage:machine_casing",
			1,
			["AAA", "ABA", "AAA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:stone",
			},
		],
		[
			"refinedstorage:disk_drive",
			1,
			["ABA", "ACA", "ADA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "minecraft:chest",
				C: "refinedstorage:machine_casing",
				D: "refinedstorage:advanced_processor",
			},
		],
		[
			"refinedstorage:interface",
			1,
			["ABA", "CDC", "AEA"],
			{
				A: "refinedstorage:quartz_enriched_iron",
				B: "refinedstorage:importer",
				C: "minecraft:redstone",
				D: "refinedstorage:machine_casing",
				E: "refinedstorage:exporter",
			},
		],
		[
			"refinedstorage:external_storage",
			1,
			["ABC", "DED", "BFB"],
			{
				A: "refinedstorage:construction_core",
				B: "refinedstorage:quartz_enriched_iron",
				C: "refinedstorage:destruction_core",
				D: "minecraft:chest",
				E: "refinedstorage:cable",
				F: "refinedstorage:improved_processor",
			},
		],
		[
			"refinedstorage:importer",
			1,
			["AB ", "C  ", "   "],
			{
				A: "refinedstorage:cable",
				B: "refinedstorage:construction_core",
				C: "refinedstorage:improved_processor",
			},
		],
		[
			"refinedstorage:exporter",
			1,
			["AB ", "C  ", "   "],
			{
				A: "refinedstorage:cable",
				B: "refinedstorage:destruction_core",
				C: "refinedstorage:improved_processor",
			},
		],
	];

	// Appends custom uncrafting recipe for each unique color and machine
	COLORS.forEach((color) => {
		MACHINES.forEach((machine) => {
			allUncraftingList.push([
				`refinedstorage:${color}_${machine}`,
				1,
				["AB ", "   ", "   "],
				{
					A: `refinedstorage:${machine}`,
					B: `#forge:dyes/${color}`,
				},
			]);
		});
	});

	// Creates the rest of the uncrafting recipes
	allUncraftingList.forEach((parameters) => {
		uncrafting(parameters[0], parameters[1], parameters[2], parameters[3]);
	});
});
