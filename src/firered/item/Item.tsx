import { ITEM_NONE, ITEM_N_A } from "../data/ItemData";
import { BagPocket } from "./IItem";
import { Items } from "./Items";

export let BagPockets: BagPocket[] = []

export function SanitizeItemId(itemId: number): number {
    if (itemId >= ITEM_N_A)
        return ITEM_NONE;
    return itemId;
}

export function ItemId_GetHoldEffect(itemId: number): number {
    return Items[SanitizeItemId(itemId)].holdEffect;
}