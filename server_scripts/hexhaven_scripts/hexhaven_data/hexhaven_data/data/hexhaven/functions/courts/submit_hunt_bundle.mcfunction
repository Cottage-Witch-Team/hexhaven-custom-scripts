execute store result score count hexhaven.courts.z_internal run clear @s ends_delight:dragon_tooth 0
execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 10..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s minecraft:nether_star 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 10..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s moblassos:diamond_lasso 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 3..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s minecraft:netherite_sword 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s endrem:guardian_eye 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 10..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s alexsmobs:void_worm_eye 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 5..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s deeperdarker:soul_crystal 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 5..

execute if score ok hexhaven.courts.z_internal matches 1 run clear @s ends_delight:dragon_tooth 10
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s minecraft:nether_star 10
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s moblassos:diamond_lasso 3
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s minecraft:netherite_sword 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s endrem:guardian_eye 10
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s alexsmobs:void_worm_eye 5
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s deeperdarker:soul_crystal 5

execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add @s hexhaven.courts.hunt_submissions 1
execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add Offerings hexhaven.courts.total_hunt 1

execute if score ok hexhaven.courts.z_internal matches 1 run give @s twilightforest:cinder_log 64
execute if score ok hexhaven.courts.z_internal matches 1 run give @s twilightforest:glass_sword 1

execute if score ok hexhaven.courts.z_internal matches 1 run function hexhaven:courts/z_internal/grant_aggregate_bundle_rewards