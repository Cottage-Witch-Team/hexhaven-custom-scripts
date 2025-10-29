execute store result score count hexhaven.courts.z_internal run clear @s create:brass_ingot 0
execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 16..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s create:redstone_link 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 4..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s create:precision_mechanism 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s ars_nouveau:basic_spell_turret 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s pipez:item_pipe 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 16..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s supplementaries:cog_block 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 6..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #forge:creative_controller 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 run clear @s create:brass_ingot 16
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s create:redstone_link 4
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s create:precision_mechanism 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s ars_nouveau:basic_spell_turret 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s pipez:item_pipe 16
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s supplementaries:cog_block 6
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #forge:creative_controller 1

execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add @s hexhaven.courts.cogs_submissions 1
execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add Offerings hexhaven.courts.total_cogs 1

execute if score ok hexhaven.courts.z_internal matches 1 run give @s ars_creo:starbuncle_wheel 2
execute if score ok hexhaven.courts.z_internal matches 1 run give @s refinedstorage:1k_storage_part 2

execute if score ok hexhaven.courts.z_internal matches 1 run function hexhaven:courts/z_internal/grant_aggregate_bundle_rewards