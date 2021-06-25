export enum QL_EVENT {
    EVENT_0 = 0, // Null
    EVENT_1 = 1, // Null
    EVENT_2 = 2, // Null
    SWITCHED_PARTY_ORDER = 3,
    USED_ITEM = 4,
    GAVE_HELD_ITEM = 5,
    GAVE_HELD_ITEM_BAG = 6,
    GAVE_HELD_ITEM_PC = 7,
    TOOK_HELD_ITEM = 8,
    SWAPPED_HELD_ITEM = 9,
    SWAPPED_HELD_ITEM_PC = 10,
    USED_PKMN_CENTER = 11,
    LINK_TRADED = 12,
    LINK_BATTLED_SINGLE = 13,
    LINK_BATTLED_DOUBLE = 14,
    LINK_BATTLED_MULTI = 15,
    USED_UNION_ROOM = 16,
    USED_UNION_ROOM_CHAT = 17,
    LINK_TRADED_UNION = 18,
    LINK_BATTLED_UNION = 19,
    SWITCHED_MONS_BETWEEN_BOXES = 20,
    SWITCHED_MONS_WITHIN_BOX = 21,
    SWITCHED_PARTY_MON_FOR_PC_MON = 22,
    MOVED_MON_BETWEEN_BOXES = 23,
    MOVED_MON_WITHIN_BOX = 24,
    WITHDREW_MON_PC = 25,
    DEPOSITED_MON_PC = 26,
    SWITCHED_MULTIPLE_MONS = 27,
    DEPOSITED_ITEM_PC = 28,
    WITHDREW_ITEM_PC = 29,
    DEFEATED_GYM_LEADER = 30,
    DEFEATED_WILD_MON = 31,
    DEFEATED_E4_MEMBER = 32,
    DEFEATED_CHAMPION = 33,
    DEFEATED_TRAINER = 34,
    DEPARTED = 35,
    USED_FIELD_MOVE = 36,
    BOUGHT_ITEM = 37,
    SOLD_ITEM = 38,
    EVENT_39 = 39, // Null
    OBTAINED_ITEM = 40,
    EVENT_41 = 41, // Null
    ARRIVED = 42,
    
    USED_POKEMART = QL_EVENT.BOUGHT_ITEM - 1 // Used as a start pos for QL_EVENT_BOUGHT_ITEM / QL_EVENT_SOLD_ITEM,
}