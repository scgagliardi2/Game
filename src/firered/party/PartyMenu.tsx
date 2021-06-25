import { STATUS1_BURN, STATUS1_FREEZE, STATUS1_PARALYSIS, STATUS1_PSN_ANY, STATUS1_SLEEP } from "../data/BattleData";
import { AILMENT_BRN, AILMENT_FRZ, AILMENT_NONE, AILMENT_PRZ, AILMENT_PSN, AILMENT_SLP } from "../data/PartyMenuData";

export function GetAilmentFromStatus(status: number): number {
    if (status & STATUS1_PSN_ANY)
        return AILMENT_PSN;
    if (status & STATUS1_PARALYSIS)
        return AILMENT_PRZ;
    if (status & STATUS1_SLEEP)
        return AILMENT_SLP;
    if (status & STATUS1_FREEZE)
        return AILMENT_FRZ;
    if (status & STATUS1_BURN)
        return AILMENT_BRN;
    return AILMENT_NONE;
}