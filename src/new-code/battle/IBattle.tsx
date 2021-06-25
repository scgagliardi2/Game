import { ITEM } from "../item/data/Items";
import { MOVE } from "../move/data/Moves";
import { FLAG } from "../pokemon/data/Flag";
import { SPECIES } from "../pokemon/data/Species";
import { TRAINER_CLASS } from "../trainer/TrainerClass";
import { TRAINER_ENCOUNTER_MUSIC } from "../trainer/TrainerEncounterMusic";
import { TRAINER_PIC } from "../trainer/TrainerPic";

export interface TrainerMonNoItemDefaultMoves {
    iv: number
    lvl: number
    species: SPECIES
}

export interface TrainerMonItemDefaultMoves {
    iv: number
    lvl: number
    species: SPECIES
    heldItem: ITEM
}

export interface TrainerMonNoItemCustomMoves {
    iv: number
    lvl: number
    species: SPECIES
    moves: MOVE[]
}

export interface TrainerMonItemCustomMoves {
    iv: number
    lvl: number
    species: SPECIES
    heldItem: ITEM
    moves: MOVE[]
}

export interface TrainerMonPtr {
    NoItemDefaultMoves: TrainerMonNoItemDefaultMoves | undefined
    NoItemCustomMoves: TrainerMonNoItemCustomMoves | undefined
    ItemDefaultMoves: TrainerMonItemDefaultMoves | undefined
    ItemCustomMoves: TrainerMonItemCustomMoves | undefined
}

export interface Trainer{
    /*0x00*/ partyFlags: FLAG[]
    /*0x01*/ trainerClass: TRAINER_CLASS
    /*0x02*/ encounterMusic_gender: TRAINER_ENCOUNTER_MUSIC // last bit is gender
    /*0x03*/ trainerPic: TRAINER_PIC
    /*0x04*/ trainerName: string
    /*0x10*/ items: any
    /*0x18*/ doubleBattle: boolean
    /*0x1C*/ aiFlags: any
    /*0x20*/ partySize: number
    /*0x24*/ party: TrainerMonPtr
}

export interface BattleResults {
    playerFaintCounter: number
    opponentFaintCounter: number
    playerSwitchesCounter: number
    numHealingItemsUsed: number
    numRevivesUsed: number
    playerMonWasDamaged: boolean | 1
    usedMasterBall: boolean | 1
    caughtMonBall: number | 4
    shinyWildMon: boolean | 1
    unk5_7: boolean | 1
    playerMon1Species: number
    playerMon1Name: string
    battleTurnCounter: number
    playerMon2Name: string
    pokeblockThrows: number
    lastOpponentSpecies: number
    lastUsedMovePlayer: number
    lastUsedMoveOpponent: number
    playerMon2Species: number
    caughtMonSpecies: number
    caughtMonNick: string
    filler34: number[]
    catchAttempts: number[]
}

export interface BattleStruct {
    turnEffectsTracker: number,
    turnEffectsBattlerId: number,
    filler2: number, // unused
    turnCountersTracker: number,
    wrappedMove: number[], // Leftover from Ruby's ewram access.
    moveTarget: number[],
    expGetterMonId: number,
    field_11: number, // unused
    wildVictorySong: number,
    dynamicMoveType: number,
    wrappedBy: number[],
    assistPossibleMoves: number[], // 6 mons, each of them knowing 4 moves
    focusPunchBattlerId: number,
    battlerPreventingSwitchout: number,
    moneyMultiplier: number,
    savedTurnActionNumber: number,
    switchInAbilitiesCounter: number,
    faintedActionsState: number,
    faintedActionsBattlerId: number,
    // balign 2
    expValue: number,
    scriptPartyIdx: number, // for printing the nickname
    sentInPokes: number,
    selectionScriptFinished: boolean[],
    battlerPartyIndexes: number[],
    monToSwitchIntoId: number[],
    battlerPartyOrders: number[],
    runTries: number,
    caughtMonNick: number[],
    field_78: number, // unused
    safariGoNearCounter: number,
    safariPkblThrowCounter: number,
    safariEscapeFactor: number,
    safariCatchFactor: number,
    linkBattleVsSpriteId_V: number,
    linkBattleVsSpriteId_S: number,
    formToChangeInto: number,
    chosenMovePositions: number[],
    stateIdAfterSelScript: number[],
    field_88: number, // unused
    field_89: number, // unused
    field_8A: number, // unused
    playerPartyIdx: number,
    field_8C: number, // unused
    field_8D: number, // unused
    stringMoveType: number,
    expGetterBattlerId: number,
    field_90: number, // unused
    absentBattlerFlags: number,
    AI_monToSwitchIntoId: number[],
    simulatedInputState: number[],  // used by Oak/Old Man/Pokedude controllers
    lastTakenMove: number[], // ask gamefreak why they declared it that way
    hpOnSwitchout: number[],
    abilityPreventingSwitchout: number,
    hpScale: number,
    savedBattleTypeFlags: number,
    savedCallback: () => void,
    synchronizeMoveEffect: number,
    multiplayerId: number,
    overworldWeatherDone: number,
    atkCancellerTracker: number,
    usedHeldItems: number[],
    chosenItem: number, // why is this an u8?
    AI_itemType: number,
    AI_itemFlags: number,
    choicedMove: number[],
    changedItems: number[],
    intimidateBattler: number,
    switchInItemsCounter: number,
    field_DA: number, // battle tower related
    turnSideTracker: number,
    fillerDC: number[],
    givenExpMons: number,
    lastTakenMoveFrom: number[],
    castformPalette: number[][],
    wishPerishSongState: number,
    wishPerishSongBattlerId: number,
    field_182: number,
    padding_1E4: {
        linkPartnerHeader: LinkPartnerHeader,
        multiBattleMons: MultiBattlePokemonTx
    }
}


