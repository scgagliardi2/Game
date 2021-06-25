import { HelpSystemContextId } from "../State";

export enum HELPCONTEXT {
    NONE = 0,
    TITLE_SCREEN = 1,
    NEW_GAME = 2,
    NAMING_SCREEN = 3,
    POKEDEX = 4,
    PARTY_MENU = 5,
    POKEMON_INFO = 6,
    POKEMON_SKILLS = 7,
    POKEMON_MOVES = 8,
    BAG = 9,
    TRAINER_CARD_FRONT = 10,
    TRAINER_CARD_BACK = 11,
    SAVE = 12,
    OPTIONS = 13,
    PLAYERS_HOUSE = 14,
    OAKS_LAB = 15,
    POKECENTER = 16,
    MART = 17,
    GYM = 18,
    INDOORS = 19,
    OVERWORLD = 20,
    DUNGEON = 21, // Caves and Forests
    SURFING = 22,
    WILD_BATTLE = 23,
    TRAINER_BATTLE_SINGLE = 24,
    TRAINER_BATTLE_DOUBLE = 25,
    SAFARI_BATTLE = 26,
    PC = 27,
    BILLS_PC = 28,
    PLAYERS_PC_ITEMS = 29,
    PLAYERS_PC_MAILBOX = 30,
    PC_MISC = 31, // Prof Oaks PC and the HoF PC
    BEDROOM_PC = 32,
    BEDROOM_PC_ITEMS = 33,
    BEDROOM_PC_MAILBOX = 34,
    UNUSED = 35,
    COUNT = 36
}

export function SetHelpContext(contextId: HELPCONTEXT) {
    switch (HelpSystemContextId)
    {
        case HELPCONTEXT.WILD_BATTLE:
        case HELPCONTEXT.TRAINER_BATTLE_SINGLE:
        case HELPCONTEXT.TRAINER_BATTLE_DOUBLE:
        case HELPCONTEXT.SAFARI_BATTLE:
            if (contextId == HELPCONTEXT.BAG 
            || contextId == HELPCONTEXT.PARTY_MENU 
            || contextId == HELPCONTEXT.POKEMON_INFO 
            || contextId == HELPCONTEXT.POKEMON_SKILLS 
            || contextId == HELPCONTEXT.POKEMON_MOVES)
                break;
            // fallthrough
        default:
            HelpSystemContextId = contextId;
            break;
    }
}
