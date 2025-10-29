clear @s minecraft:cobweb{"hexhaven.blessbane.clue_item": 1}
clear @s minecraft:wooden_axe{"hexhaven.blessbane.clue_item": 7}
clear @s luphieclutteredmod:luphie_key{"hexhaven.blessbane.clue_item": 3}
clear @s minecraft:sunflower{"hexhaven.blessbane.clue_item": 4}
clear @s alexsmobs:mungal_spores{"hexhaven.blessbane.clue_item": 5}
clear @s create:schedule{"hexhaven.blessbane.clue_item": 6}
clear @s comforts:sleeping_bag_white{"hexhaven.blessbane.clue_item": 2}
clear @s ars_nouveau:blank_parchment{"hexhaven.blessbane.clue_item": 8}
clear @s minecraft:enchanted_book{"hexhaven.blessbane.clue_item": 9}
clear @s domesticationinnovation:feather_on_a_stick{"hexhaven.blessbane.clue_item": 10}
clear @s fantasyfurniture:decorations/gravestone{"hexhaven.blessbane.clue_item": 11}
clear @s nightlights:frog_brown{"hexhaven.blessbane.clue_item": 12}
scoreboard players set @s hexhaven.blessbane.scavenger_progress 1
playsound minecraft:entity.frog.hurt master @s
title @s subtitle {"text": "Follow the clues to find Mayor Gaylord!"}
title @s title {"text": "Hunt for the Mayor", "color": "gold"}
give @s minecraft:cobweb{ "hexhaven.blessbane.clue_item": 1, display: { Lore: ['{"text": "An unexpected basement\'s unexpected basement", "italic": false}'], Name: '{"text": "Clue #1", "italic": false}', }, }