scoreboard players add tick_count hexhaven.z_internal 1

execute as @a[team=] run team join hexhaven.scoreboard_display_enabled @s

scoreboard players set toggle_complete hexhaven.z_internal 0
scoreboard players enable @a hexhaven_toggle_scoreboard
execute as @a[team=hexhaven.scoreboard_display_enabled,scores={hexhaven_toggle_scoreboard=1..}] store success score toggle_complete hexhaven.z_internal run team join hexhaven.scoreboard_display_disabled @s
execute as @a[team=hexhaven.scoreboard_display_disabled,scores={hexhaven_toggle_scoreboard=1..}] unless score toggle_complete hexhaven.z_internal matches 1 run team join hexhaven.scoreboard_display_enabled @s
scoreboard players set @a hexhaven_toggle_scoreboard 0

scoreboard players set toggle_complete hexhaven.z_internal 0
scoreboard players enable @a hexhaven_toggle_progress
execute as @a[tag=!hexhaven.progress_display_disabled,scores={hexhaven_toggle_progress=1..}] store success score toggle_complete hexhaven.z_internal run tag @s add hexhaven.progress_display_disabled
execute as @a[tag=hexhaven.progress_display_disabled,scores={hexhaven_toggle_progress=1..}] unless score toggle_complete hexhaven.z_internal matches 1 run tag @s remove hexhaven.progress_display_disabled
scoreboard players set @a hexhaven_toggle_progress 0