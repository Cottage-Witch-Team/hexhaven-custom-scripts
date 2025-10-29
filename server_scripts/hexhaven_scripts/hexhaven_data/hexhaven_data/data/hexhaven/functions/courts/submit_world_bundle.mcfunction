execute store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_globes 0
execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 16..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_backpacks 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s twilightforest:maze_map_focus 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s friendsandfoes:totem_of_freezing 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s aquaculture:neptunium_ingot 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s majruszsaccessories:adventurer_kit 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s deeperdarker:sculk_transmitter 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_globes 16
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_backpacks 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s twilightforest:maze_map_focus 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s friendsandfoes:totem_of_freezing 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s aquaculture:neptunium_ingot 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s majruszsaccessories:adventurer_kit 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s deeperdarker:sculk_transmitter 1

execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add @s hexhaven.courts.world_submissions 1
execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add Offerings hexhaven.courts.total_world 1

execute if score ok hexhaven.courts.z_internal matches 1 run give @s quark:dusky_myalite 64
execute if score ok hexhaven.courts.z_internal matches 1 run give @s missingwilds:firefly_bottle 1
execute if score ok hexhaven.courts.z_internal matches 1 run give @s missingwilds:jar 1

execute if score ok hexhaven.courts.z_internal matches 1 run function hexhaven:courts/z_internal/grant_aggregate_bundle_rewards