execute store success score ok hexhaven.blessbane.z_internal store result score gapples_submitted hexhaven.blessbane.z_internal run clear @s enchanted_golden_apple

execute if score ok hexhaven.blessbane.z_internal matches 1 run scoreboard players operation gapples_submitted hexhaven.blessbane.z_internal *= gapples_per_enchanted_gapple hexhaven.blessbane.z_internal

execute if score ok hexhaven.blessbane.z_internal matches 1 run scoreboard players operation @s hexhaven.blessbane.gapple_count += gapples_submitted hexhaven.blessbane.z_internal

execute if score ok hexhaven.blessbane.z_internal matches 1 store result bossbar hexhaven:blessbane/total_gapples value run scoreboard players operation total_gapples hexhaven.blessbane.z_internal += gapples_submitted hexhaven.blessbane.z_internal

execute if score ok hexhaven.blessbane.z_internal matches 1 run bossbar set hexhaven:blessbane/total_gapples name [ {"text": "Total Golden Apples Donated - ", "color": "yellow", "bold": true}, {"score": {"name": "total_gapples", "objective": "hexhaven.blessbane.z_internal"}, "color": "yellow", "bold": true}, {"text": " / 750000", "color": "yellow", "bold": true} ]

execute if score ok hexhaven.blessbane.z_internal matches 1 store result storage hexhaven:blessbane/z_internal xp int 10 run scoreboard players get gapples_submitted hexhaven.blessbane.z_internal

execute if score ok hexhaven.blessbane.z_internal matches 1 run summon experience_orb ~ ~1 ~ {Tags:["hexhaven.blessbane.z_internal.reward_xp"], Value: 1}

execute as @e[tag=hexhaven.blessbane.z_internal.reward_xp,type=experience_orb] run function hexhaven:blessbane/z_internal/apply_reward_xp