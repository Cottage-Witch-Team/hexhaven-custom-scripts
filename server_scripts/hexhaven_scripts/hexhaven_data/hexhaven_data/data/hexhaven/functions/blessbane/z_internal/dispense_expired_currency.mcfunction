execute if score coins_removed hexhaven.blessbane.z_internal matches 1.. run give @s gold_nugget{display: {Name: '{"text": "Expired Currency"}'}}
scoreboard players remove coins_removed hexhaven.blessbane.z_internal 1
execute if score coins_removed hexhaven.blessbane.z_internal matches 1.. run function hexhaven:blessbane/z_internal/dispense_expired_currency