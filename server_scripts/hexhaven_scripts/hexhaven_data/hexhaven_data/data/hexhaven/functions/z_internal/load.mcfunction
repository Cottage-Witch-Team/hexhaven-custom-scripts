scoreboard objectives add hexhaven.z_internal dummy
scoreboard objectives add hexhaven_toggle_scoreboard trigger
scoreboard objectives add hexhaven_toggle_progress trigger

team add hexhaven.scoreboard_display_enabled
team modify hexhaven.scoreboard_display_enabled color white
team add hexhaven.scoreboard_display_disabled
team modify hexhaven.scoreboard_display_disabled color gray

scoreboard players set tick_count hexhaven.z_internal 0

# reset gamerules to hopefully mitigate world data corruption
gamerule spawnRadius 0
gamerule commandBlockOutput false
gamerule playersSleepingPercentage 1
setworldspawn 647 73 759 -90
worldborder damage amount 0
bossbar set hexhaven:blessbane/total_gapples visible false