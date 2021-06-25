import { Berry } from "./Berry";

export const BERRY_NAME_LENGTH = 6
export const BERRY_NAME_COUNT = 7
export const BERRY_ITEM_EFFECT_COUNT = 18

export interface EnigmaBerry {
    berry: Berry;
    itemEffect: number[]
    holdEffect: number
    holdEffectParam: number
    // checksum: number
};

export interface BattleEnigmaBerry {
    /*0x00*/ name: string[]
    /*0x07*/ holdEffect: number
    /*0x08*/ itemEffect: number[]
    /*0x1A*/ holdEffectParam: number
};

export interface BerryTree {
    berry: number;
    stage: number | 7;
    growthSparkle: number | 1;
    minutesUntilNextStage: number;
    berryYield: number;
    regrowthCount: number | 4;
    watered1: number | 1;
    watered2: number | 1;
    watered3: number | 1;
    watered4: number | 1;
}