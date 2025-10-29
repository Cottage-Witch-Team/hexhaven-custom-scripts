scoreboard players set aggregate_completions hexhaven.courts.z_internal 0
execute store success score temp hexhaven.courts.z_internal if score @s hexhaven.courts.cogs_submissions matches 1..
scoreboard players operation aggregate_completions hexhaven.courts.z_internal += temp hexhaven.courts.z_internal
execute store success score temp hexhaven.courts.z_internal if score @s hexhaven.courts.feasts_submissions matches 1..
scoreboard players operation aggregate_completions hexhaven.courts.z_internal += temp hexhaven.courts.z_internal
execute store success score temp hexhaven.courts.z_internal if score @s hexhaven.courts.glamor_submissions matches 1..
scoreboard players operation aggregate_completions hexhaven.courts.z_internal += temp hexhaven.courts.z_internal
execute store success score temp hexhaven.courts.z_internal if score @s hexhaven.courts.hearth_submissions matches 1..
scoreboard players operation aggregate_completions hexhaven.courts.z_internal += temp hexhaven.courts.z_internal
execute store success score temp hexhaven.courts.z_internal if score @s hexhaven.courts.hunt_submissions matches 1..
scoreboard players operation aggregate_completions hexhaven.courts.z_internal += temp hexhaven.courts.z_internal
execute store success score temp hexhaven.courts.z_internal if score @s hexhaven.courts.world_submissions matches 1..
scoreboard players operation aggregate_completions hexhaven.courts.z_internal += temp hexhaven.courts.z_internal

execute if score aggregate_completions hexhaven.courts.z_internal matches 4.. unless score @s hexhaven.courts.z_internal.minor_reward_granted matches 1 run function hexhaven:courts/z_internal/grant_minor_reward

execute if score aggregate_completions hexhaven.courts.z_internal matches 6 unless score @s hexhaven.courts.z_internal.major_reward_granted matches 1 run function hexhaven:courts/z_internal/grant_major_reward