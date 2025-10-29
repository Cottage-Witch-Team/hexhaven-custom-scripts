execute store result score count hexhaven.courts.z_internal run clear @s #hexhaven:golden_apple_crates 0
execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 20..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s nethersdelight:stuffed_hoglin 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s culturaldelights:cucumber_crate 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 25..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s extradelight:pumpkin_cheesecake 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s extradelight:flour_sack 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 25..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_fillet_knives 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s farmersrespite:coffee_beans_sack 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 25..

execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:golden_apple_crates 20
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s nethersdelight:stuffed_hoglin 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s culturaldelights:cucumber_crate 25
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s extradelight:pumpkin_cheesecake 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s extradelight:flour_sack 25
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_fillet_knives 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s farmersrespite:coffee_beans_sack 25

execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add @s hexhaven.courts.feasts_submissions 1
execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add Offerings hexhaven.courts.total_feasts 1

execute if score ok hexhaven.courts.z_internal matches 1 run give @s extradelight:vinegar 16
execute if score ok hexhaven.courts.z_internal matches 1 run give @s extradelight:yeast 16

execute if score ok hexhaven.courts.z_internal matches 1 run function hexhaven:courts/z_internal/grant_aggregate_bundle_rewards