execute in minecraft:mining_dimension run tp @s 50 72 -12 0 0
advancement revoke @s only hexhaven:goto_outerlands
tag @s add hexhaven.z_internal.goto_outerlands_delayed
schedule function hexhaven:z_internal/goto_outerlands_delayed_wrapper 1s