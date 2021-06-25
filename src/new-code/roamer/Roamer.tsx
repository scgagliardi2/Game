import { SPECIES } from "../pokemon/data/Species";
import { Pokemon } from "../pokemon/IPokemon";
import { SaveBlock1 } from "../State";

export function saveRoamer() {
    return SaveBlock1.roamer
}

export interface Roamer {
    /*0x00*/ ivs: number
    /*0x04*/ personality: number
    /*0x08*/ species: SPECIES
    /*0x0A*/ hp: number
    /*0x0C*/ level: number
    /*0x0D*/ status: number
    /*0x0E*/ cool: number
    /*0x0F*/ beauty: number
    /*0x10*/ cute: number
    /*0x11*/ smart: number
    /*0x12*/ tough: number
    /*0x13*/ active: boolean
    /*0x14*/ filler: number[]
}

export function RoamerMoveToOtherLocationSet() {
    let mapNum = 0;
    let roamer: Roamer = saveRoamer();

    if (!roamer.active)
        return;

    sRoamerLocation[MAP_GRP] = 3;

    while (1)
    {
        mapNum = sRoamerLocations[Random() % (NELEMS(sRoamerLocations) - 1)][0];
        if (sRoamerLocation[MAP_NUM] != mapNum)
        {
            sRoamerLocation[MAP_NUM] = mapNum;
            return;
        }
    }
}


export function UpdateRoamerHPStatus(mon: Pokemon) {
    saveRoamer().hp = mon.hp
    saveRoamer().status = mon.status

    RoamerMoveToOtherLocationSet();
}

export function SetRoamerInactive() {
    let roamer: Roamer = saveRoamer();
    roamer.active = false;
}