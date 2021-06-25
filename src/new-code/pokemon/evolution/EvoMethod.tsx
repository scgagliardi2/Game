export enum EVO_METHOD {
    FRIENDSHIP = 0x0001, // Pokémon levels up with friendship ≥ 220
    FRIENDSHIP_DAY = 0x0002, // Pokémon levels up during the day with friendship ≥ 220
    FRIENDSHIP_NIGHT = 0x0003, // Pokémon levels up at night with friendship ≥ 220
    LEVEL = 0x0004, // Pokémon reaches the specified level
    TRADE = 0x0005, // Pokémon is traded
    TRADE_ITEM = 0x0006, // Pokémon is traded while it's holding the specified item
    ITEM = 0x0007, // specified item is used on Pokémon
    LEVEL_ATK_GT_DEF = 0x0008, // Pokémon reaches the specified level with attack > defense
    LEVEL_ATK_EQ_DEF = 0x0009, // Pokémon reaches the specified level with attack = defense
    LEVEL_ATK_LT_DEF = 0x000a, // Pokémon reaches the specified level with attack < defense
    LEVEL_SILCOON = 0x000b, // Pokémon reaches the specified level with a Silcoon personality value
    LEVEL_CASCOON = 0x000c, // Pokémon reaches the specified level with a Cascoon personality value
    LEVEL_NINJASK = 0x000d, // Pokémon reaches the specified level (special value for Ninjask)
    LEVEL_SHEDINJA = 0x000e, // Pokémon reaches the specified level (special value for Shedinja)
    BEAUTY = 0x000f // Pokémon levels up with beauty ≥ specified value
}