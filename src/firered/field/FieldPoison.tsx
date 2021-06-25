import { STATUS1_NONE } from "../data/BattleData";
import { MON_DATA_HP, MON_DATA_NICKNAME, MON_DATA_SANITY_HAS_SPECIES, MON_DATA_SPECIES2, MON_DATA_STATUS, PARTY_SIZE } from "../data/PokemonData";
import { SPECIES_EGG, SPECIES_NONE } from "../data/SpeciesData";
import { Pokemon } from "../pokemon/IPokemon";
import { AdjustFriendship, GetMonData, PlayerParty, SetMonData } from "../pokemon/Pokemon";
import { FRIENDSHIP_EVENT_FAINT_OUTSIDE_BATTLE } from '../data/PokemonData'
import { StringVar1 } from "../Global";
import { StringGetEnd10 } from "../utils/StringUtils";
import { AILMENT_PSN } from "../data/PartyMenuData";
import { GetAilmentFromStatus } from "../party/PartyMenu";
import { CreateTask, DestroyTask, Tasks } from "../../new-code/task/Task";
import { IsFieldMessageBoxHidden, ShowFieldMessage } from "./FieldMessageBox";
import { Text_PkmnFainted3 } from "../data/StringData";
import { SpecialVar_Result } from "../event/EventDash";
import { EnableBothScriptContexts, ScriptContext1_Stop } from "../script/Script";
import { FldEffPoison_Start } from "./FieldEffectPoinson";

export enum FLDPSN {
    NONE,
    PSN,
    FNT
}

export function IsMonValidSpecies(pokemon: Pokemon): boolean {
    let species = GetMonData(pokemon, MON_DATA_SPECIES2, undefined);

    if (species == SPECIES_NONE || species == SPECIES_EGG)
        return false;

    return true;
}

export function AllMonsFainted(): boolean {
    for (var i = 0; i < PARTY_SIZE; i++)
        if (IsMonValidSpecies(PlayerParty[i]) && GetMonData(PlayerParty[i], MON_DATA_HP, undefined))
            return false;

    return true;
}

export function FaintFromFieldPoison(partyIdx: number) {
    let pokemon: Pokemon = PlayerParty[partyIdx];
    let status = STATUS1_NONE;
    AdjustFriendship(pokemon, FRIENDSHIP_EVENT_FAINT_OUTSIDE_BATTLE);
    SetMonData(pokemon, MON_DATA_STATUS, status);
    GetMonData(pokemon, MON_DATA_NICKNAME, StringVar1);
    StringGetEnd10(StringVar1);
}

export function MonFaintedFromPoison(partyIdx: number): boolean {
    let pokemon: Pokemon = PlayerParty[partyIdx];

    if (IsMonValidSpecies(pokemon) && !GetMonData(pokemon, MON_DATA_HP, undefined) && 
        GetAilmentFromStatus(GetMonData(pokemon, MON_DATA_STATUS, undefined)) == AILMENT_PSN) {
        return true;
    }

    return false;
}

export function Task_TryFieldPoisonWhiteOut(taskId: number) {
    let data = Tasks[taskId].data;

    let id = data[1]

    switch (data[0])
    {
        case 0:
            for (; id < PARTY_SIZE; id++)
            {
                if (MonFaintedFromPoison(id))
                {
                    FaintFromFieldPoison(id);
                    ShowFieldMessage(Text_PkmnFainted3);
                    data[0]++;
                    return;
                }
            }
            data[0] = 2;
            break;
        case 1:
            if (IsFieldMessageBoxHidden())
            data[0]--;
            break;
        case 2:
            if (AllMonsFainted())
                SpecialVar_Result(true);
            else
                SpecialVar_Result(false);
            EnableBothScriptContexts();
            DestroyTask(taskId);
            break;
    }
}

export function TryFieldPoisonWhiteOut() {
    CreateTask(Task_TryFieldPoisonWhiteOut, 80);
    ScriptContext1_Stop();
}

export function DoPoisonFieldEffect(): number {
    let i;
    let hp;
    
    let party = PlayerParty;
    let numPoisoned = 0;
    let numFainted = 0;
    for (i = 0; i < PARTY_SIZE; i++)
    {
        var pokemon = party[i]

        if (GetMonData(pokemon, MON_DATA_SANITY_HAS_SPECIES, undefined) && GetAilmentFromStatus(GetMonData(pokemon, MON_DATA_STATUS, undefined)) == AILMENT_PSN)
        {
            hp = GetMonData(pokemon, MON_DATA_HP, undefined);
            if (hp == 0 || --hp == 0)
                numFainted++;
            SetMonData(pokemon, MON_DATA_HP, hp);
            numPoisoned++;
        }
    }
    if (numFainted || numPoisoned)
        FldEffPoison_Start();
    if (numFainted)
        return FLDPSN.FNT;
    if (numPoisoned)
        return FLDPSN.PSN;
    return FLDPSN.NONE;
}