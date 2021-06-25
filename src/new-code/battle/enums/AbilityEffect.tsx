export enum ABILITYEFFECT {
    ON_SWITCHIN = 0x0,
    ENDTURN = 0x1,
    MOVES_BLOCK = 0x2,
    ABSORBING = 0x3,
    MOVE_END = 0x4,
    IMMUNITY = 0x5,
    FORECAST = 0x6,
    SYNCHRONIZE = 0x7,
    ATK_SYNCHRONIZE = 0x8,
    INTIMIDATE1 = 0x9,
    INTIMIDATE2 = 0xA,
    TRACE = 0xB,
    CHECK_OTHER_SIDE = 0xC,
    CHECK_BATTLER_SIDE = 0xD,
    FIELD_SPORT = 0xE,
    CHECK_FIELD_EXCEPT_BATTLER = 0xF, // TODO: Is it correct? ,
    COUNT_OTHER_SIDE = 0x10,
    COUNT_BATTLER_SIDE = 0x11,
    COUNT_ON_FIELD = 0x12,
    CHECK_ON_FIELD = 0x13,
    SWITCH_IN_WEATHER = 0xFF
}