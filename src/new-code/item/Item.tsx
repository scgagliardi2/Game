import { items_icons } from "../graphics/items_icons";
import { HOLD_EFFECT } from "./data/HoldEffects";
import { ITEM } from "./data/Items";
import { POCKET_TYPE } from "./data/PocketTypes";

export interface Item {
    name: string
    itemId: number
    price: number
    holdEffect: HOLD_EFFECT
    holdEffectParam: number
    description: string
    importance: number
    exitsBagOnUse: number
    pocket: POCKET_TYPE
    type: number
    fieldUseFunc: string | undefined
    battleUsage: number
    battleUseFunc: string | undefined
    secondaryId: number
}

export interface ItemSlot
{
    item: Item
    quantity: number
};

export interface BagPocket {
    itemSlots: ItemSlot[]
    capacity: number
}

export const Items = require('./data/items.json')

export function GetItem(itemId: number): Item {
    var stored: Item = Items.itmes[itemId]

    return {
        name: stored.name,
        itemId: stored.itemId,
        price: stored.price,
        holdEffect: stored.holdEffect,
        holdEffectParam: stored.holdEffectParam,
        description: stored.description,
        importance: stored.importance,
        exitsBagOnUse: stored.exitsBagOnUse,
        pocket: stored.pocket,
        type: stored.type,
        fieldUseFunc: stored.fieldUseFunc == 'NULL' ? undefined : stored.fieldUseFunc,
        battleUsage: stored.battleUsage,
        battleUseFunc: stored.battleUseFunc == 'NULL' ? undefined : stored.battleUseFunc,
        secondaryId: stored.secondaryId
    }
}

export function GetIcon(item: Item): any {
    return items_icons.get(item.name.toLowerCase().replace(' ', '_'))
}

export function ItemId_GetHoldEffect(itemId: ITEM): HOLD_EFFECT
{
    return GetItem(itemId).holdEffect;
}