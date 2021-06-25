export interface Item {
    name: string //[ITEM_NAME_LENGTH]
    itemId: number
    price: number
    holdEffect: number
    holdEffectParam: number
    description: string
    importance: number
    exitsBagOnUse: number
    pocket: number
    type: number
    fieldUseFunc: ItemUseFunc
    battleUsage: number
    battleUseFunc: ItemUseFunc
    secondaryId: number
}

export interface BagPocket {
    itemSlots: ItemSlot
    capacity: number
}