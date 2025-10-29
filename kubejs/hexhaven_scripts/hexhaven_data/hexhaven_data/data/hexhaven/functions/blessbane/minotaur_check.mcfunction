kill @e[tag=hexhaven.blessbane.minotaur_body,predicate=!hexhaven:blessbane/valid_minotaur_body]
kill @e[tag=hexhaven.blessbane.minotaur_head,predicate=!hexhaven:blessbane/valid_minotaur_head]
execute unless entity @e[tag=hexhaven.blessbane.minotaur_head] unless entity @e[tag=hexhaven.blessbane.minotaur_body] run summon villager 14553 93 -14585 { VillagerData:{type:snow,profession:nitwit,level:2}, CustomName:'[{"text":"Minotaur","color":"red","strikethrough":true}]', Invulnerable:1b, PersistenceRequired:1b, Silent:1b, Tags:["hexhaven.blessbane.minotaur_body"], Attributes:[{Name:"generic.movement_speed",Base:1f}], DeathLootTable: "minecraft:empty", Passengers:[{ id:cow, CustomName:'[{"text":"Minotaur","color":"red","strikethrough":true}]', Invulnerable:1b, PersistenceRequired:1b, Tags:["hexhaven.blessbane.minotaur_head"], Attributes:[{Name:"generic.movement_speed",Base:1f}], DeathLootTable: "minecraft:empty", CustomNameVisible: 1b, NoAI: 1b, }] }

# shoutouts to shiny minotaur!!!
# cbe2d4a0-b977-4000-be59-df9ed5eb457f
# UUID: [I; -874326880, -1183367168, -1101406306, -706001537]