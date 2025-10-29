scoreboard players operation coin_check hexhaven.blessbane.z_internal = tick_count hexhaven.z_internal
scoreboard players operation coin_check hexhaven.blessbane.z_internal %= fourteen hexhaven.blessbane.z_internal
execute if score coin_check hexhaven.blessbane.z_internal matches 0 as @a at @s run function hexhaven:blessbane/remove_old_coins

bossbar set hexhaven:blessbane/total_gapples players @a[tag=!hexhaven.progress_display_disabled]