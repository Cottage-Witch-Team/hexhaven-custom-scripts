execute store result score count hexhaven.courts.z_internal run clear @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]} 0
execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s hexerei:blood_bottle 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s hexerei:mandrake_root 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 10..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexerei:infused_fabric_block 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 16..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s hexerei:dried_sage_bundle 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_ars_charm 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 3..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_glyphs 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 3..

execute if score ok hexhaven.courts.z_internal matches 1 run clear @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]} 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s hexerei:blood_bottle 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s hexerei:mandrake_root 10
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexerei:infused_fabric_block 16
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s hexerei:dried_sage_bundle 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_ars_charm 3
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_glyphs 3

execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add @s hexhaven.courts.glamor_submissions 1
execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add Offerings hexhaven.courts.total_glamor 1

execute if score ok hexhaven.courts.z_internal matches 1 run give @s hexerei:selenite_block 64
execute if score ok hexhaven.courts.z_internal matches 1 run give @s hexerei:moon_dust 4

execute if score ok hexhaven.courts.z_internal matches 1 run function hexhaven:courts/z_internal/grant_aggregate_bundle_rewards

