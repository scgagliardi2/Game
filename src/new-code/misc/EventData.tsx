export var SpecialVar = {
    Result: 0
}

export function IsNationalPokedexEnabled(): boolean {
    if (gSaveBlock2Ptr->pokedex.unknown2 != 0xB9)
        return false;
    if (VarGet(VAR_0x404E) != 0x6258)
        return false;
    if (!FlagGet(FLAG_SYS_NATIONAL_DEX))
        return false;
    return true;
}