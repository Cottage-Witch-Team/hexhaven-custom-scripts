scoreboard players reset * hexhaven.blessbane.gapple_count
scoreboard players set total_gapples hexhaven.blessbane.z_internal 0
bossbar set hexhaven:blessbane/total_gapples value 0
bossbar set hexhaven:blessbane/total_gapples name [ {"text": "Total Golden Apples Donated - ", "color": "yellow", "bold": true}, {"score": {"name": "total_gapples", "objective": "hexhaven.blessbane.z_internal"}, "color": "yellow", "bold": true}, {"text": " / 750000", "color": "yellow", "bold": true} ]