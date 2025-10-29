execute in overworld run tp @s 231 70 86 90 0
advancement revoke @s only hexhaven:out_of_bounds
tag @s add hexhaven.z_internal.out_of_bounds_delayed
schedule function hexhaven:z_internal/out_of_bounds_delayed_wrapper 1s