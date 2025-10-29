execute store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_canvases 0
execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #handcrafted:fancy_beds 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s mcwtrpdoors:dark_oak_bamboo_trapdoor 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 4..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s framedblocks:framed_cube 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 64..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_mailboxes 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_wools 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 store result score count hexhaven.courts.z_internal run clear @s #hexhaven:courts/submittable_music_discs 0
execute if score ok hexhaven.courts.z_internal matches 1 run execute store success score ok hexhaven.courts.z_internal if score count hexhaven.courts.z_internal matches 1..

execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_canvases 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #handcrafted:fancy_beds 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s mcwtrpdoors:dark_oak_bamboo_trapdoor 4
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s framedblocks:framed_cube 64
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_mailboxes 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_wools 1
execute if score ok hexhaven.courts.z_internal matches 1 run clear @s #hexhaven:courts/submittable_music_discs 1

execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add @s hexhaven.courts.hearth_submissions 1
execute if score ok hexhaven.courts.z_internal matches 1 run scoreboard players add Offerings hexhaven.courts.total_hearth 1

execute if score ok hexhaven.courts.z_internal matches 1 run give @s alexsmobs:rainbow_glass 32
execute if score ok hexhaven.courts.z_internal matches 1 run give @s exposure:color_film 2

execute if score ok hexhaven.courts.z_internal matches 1 run function hexhaven:courts/z_internal/grant_aggregate_bundle_rewards