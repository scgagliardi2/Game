// custom stuff
export const GAME = 'FIRERED'
export const BUGFIX_SETMONIVS = false


export const ITEM_NAME_LENGTH = 14
export const POKEMON_NAME_LENGTH = 10
export const OT_NAME_LENGTH = 7
export const MOVE_NAME_LENGTH = 12

export const VERSION_SAPPHIRE = 1
export const VERSION_RUBY = 2
export const VERSION_EMERALD = 3
export const VERSION_FIRE_RED = 4
export const VERSION_LEAF_GREEN = 5

export const LANGUAGE_JAPANESE = 1
export const LANGUAGE_ENGLISH = 2
export const LANGUAGE_FRENCH = 3
export const LANGUAGE_ITALIAN = 4
export const LANGUAGE_GERMAN = 5
    // 6 goes unused but the theory is it was meant to be Korean
export const LANGUAGE_SPANISH = 7

export const GAME_LANGUAGE = LANGUAGE_ENGLISH

export let StringVar1: string = "";
export let StringVar2: string = "";
export let StringVar3: string = "";
export let StringVar4: string = "";

export class SaveBlock1
{
    /*0x0000*/ pos: Coords16
    /*0x0004*/ location: WarpData
    /*0x000C*/ continueGameWarp: WarpData
    /*0x0014*/ dynamicWarp: WarpData
    /*0x001C*/ lastHealLocation: WarpData
    /*0x0024*/ escapeWarp: WarpData
    /*0x002C*/ savedMusic: number
    /*0x002E*/ weather: number
    /*0x002F*/ weatherCycleStage: number
    /*0x0030*/ flashLevel: number
    /*0x0032*/ mapLayoutId: number
    /*0x0034*/ playerPartyCount: number
    /*0x0038*/ playerParty: Pokemon[] // PARTY_SIZE
    /*0x0290*/ money: number
    /*0x0294*/ coins: number
    /*0x0296*/ registeredItem: number // registered for use with SELECT button
    /*0x0298*/ pcItems: ItemSlot[] // PC_ITEMS_COUNT
    /*0x0310*/ bagPocket_Items: ItemSlot[] // BAG_ITEMS_COUNT
    /*0x03b8*/ bagPocket_KeyItems: ItemSlot[] // BAG_KEYITEMS_COUNT
    /*0x0430*/ bagPocket_PokeBalls: ItemSlot[] // BAG_POKEBALLS_COUNT
    /*0x0464*/ bagPocket_TMHM: ItemSlot[] // BAG_TMHM_COUNT
    /*0x054c*/ bagPocket_Berries: ItemSlot[] // BAG_BERRIES_COUNT
    /*0x05F8*/ seen1:  number[] // DEX_FLAGS_NO
    /*0x062C*/ berryBlenderRecords:  number[] // unused
    /*0x0632*/ field_632: number[] // unused?
    /*0x0638*/ trainerRematchStepCounter: number
    /*0x063A*/ trainerRematches: number[] 
    /*0x06A0*/ objectEvents: ObjectEvent[] // OBJECT_EVENTS_COUNT
    /*0x08E0*/ objectEventTemplates: ObjectEventTemplate[] // 64
    /*0x0EE0*/ flags: number[] // NUM_FLAG_BYTES
    /*0x1000*/ vars: number[] // VARS_COUNT
    /*0x1200*/ gameStats: number[] // NUM_GAME_STATS
    /*0x1300*/ questLog: QuestLog[] // QUEST_LOG_SCENE_COUNT
    /*0x2CA0*/ easyChatProfile: number[] // 6
    /*0x2CAC*/ easyChatBattleStart: number[] // 6
    /*0x2CB8*/ easyChatBattleWon: number[] // 6
    /*0x2CC4*/ easyChatBattleLost: number[] // 6
    /*0x2CD0*/ mail: MailStruct[] // MAIL_COUNT
    /*0x2F10*/ additionalPhrases: number[] // EASY_CHAT_EXTRA_PHRASES_SIZE
    /*0x2F18*/ oldMan: OldMan // unused
    /*0x2F54*/ easyChatPairs: EasyChatPair[] // unused, 5
    /*0x2F80*/ daycare: DayCare
    /*0x309C*/ giftRibbons: number[] // 11
    /*0x30A7*/ externalEventData: ExternalEventData
    /*0x30BB*/ externalEventFlags: ExternalEventFlags
    /*0x30D0*/ roamer: Roamer
    /*0x30EC*/ enigmaBerry: EnigmaBerry
    /*0x3120*/ mysteryEventBuffers: MEventBuffers
    /*0x348C*/ filler_348C: number[] // 400
    /*0x361C*/ ramScript: RamScript
    /*0x3A08*/ filler3A08: number[] // 16
    /*0x3A18*/ seen2: number[] // DEX_FLAGS_NO
    /*0x3A4C*/ rivalName: string
    /*0x3A54*/ fameChecker: FameCheckerSaveData[] // NUM_FAMECHECKER_PERSONS
    /*0x3A94*/ filler3A94: number[] // 0x40
    /*0x3AD4*/ registeredTexts: number[][] // [UNION_ROOM_KB_ROW_COUNT][21]
    /*0x3BA8*/ trainerNameRecords: TrainerNameRecord[] // 20
    /*0x3C98*/ route5DayCareMon: DaycareMon
    /*0x3D24*/ filler3D24: number[] // 0x10
    /*0x3D34*/ towerChallengeId: number
    /*0x3D38*/ trainerTower: TrainerTower[] // NUM_TOWER_CHALLENGE_TYPES
} // size: 0x3D68



export let SaveBlock1Ptr: SaveBlock1 = {

}