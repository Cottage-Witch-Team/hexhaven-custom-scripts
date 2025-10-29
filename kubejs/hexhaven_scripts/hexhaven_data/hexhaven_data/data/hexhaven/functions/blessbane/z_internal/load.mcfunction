scoreboard objectives add hexhaven.blessbane.z_internal dummy
scoreboard objectives add hexhaven.blessbane.gapple_count dummy {"text": "Golden Apples Donated", "color": "yellow", "bold": true}

bossbar add hexhaven:blessbane/total_gapples {"text": "Total Gapples"}
bossbar set hexhaven:blessbane/total_gapples max 750000
bossbar set hexhaven:blessbane/total_gapples style notched_20
bossbar set hexhaven:blessbane/total_gapples color yellow

scoreboard players set fourteen hexhaven.blessbane.z_internal 14
scoreboard players set gapples_per_crate hexhaven.blessbane.z_internal 9
scoreboard players set gapples_per_enchanted_gapple hexhaven.blessbane.z_internal 1000