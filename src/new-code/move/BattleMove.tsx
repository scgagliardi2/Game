import { FLAG } from "../pokemon/data/Flag";
import { TYPE } from "../pokemon/data/Type";
import { EFFECT } from "./data/Effect";
import { MOVE_TARGET } from "./data/MoveTarget";
import { MOVE } from "./data/Moves";

export interface BattleMove
{
    effect: EFFECT
    power: number
    type: TYPE
    accuracy: number
    pp: number
    secondaryEffectChance: number
    target: MOVE_TARGET
    priority: number
    flags: FLAG[]
}

export const BattleMoves: BattleMove[] = []

BattleMoves[MOVE.NONE] =
{
    effect: EFFECT.HIT,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 0,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.POUND] =
{
    effect: EFFECT.HIT,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 35,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.KARATE_CHOP] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 50,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DOUBLE_SLAP] =
{
    effect: EFFECT.MULTI_HIT,
    power: 15,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.COMET_PUNCH] =
{
    effect: EFFECT.MULTI_HIT,
    power: 18,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.MEGA_PUNCH] =
{
    effect: EFFECT.HIT,
    power: 80,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.PAY_DAY] =
{
    effect: EFFECT.PAY_DAY,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FIRE_PUNCH] =
{
    effect: EFFECT.BURN_HIT,
    power: 75,
    type: TYPE.FIRE,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ICE_PUNCH] =
{
    effect: EFFECT.FREEZE_HIT,
    power: 75,
    type: TYPE.ICE,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.THUNDER_PUNCH] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 75,
    type: TYPE.ELECTRIC,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SCRATCH] =
{
    effect: EFFECT.HIT,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 35,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.VICE_GRIP] =
{
    effect: EFFECT.HIT,
    power: 55,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.GUILLOTINE] =
{
    effect: EFFECT.OHKO,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 30,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.RAZOR_WIND] =
{
    effect: EFFECT.RAZOR_WIND,
    power: 80,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SWORDS_DANCE] =
{
    effect: EFFECT.ATTACK_UP_2,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.CUT] =
{
    effect: EFFECT.HIT,
    power: 50,
    type: TYPE.NORMAL,
    accuracy: 95,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.GUST] =
{
    effect: EFFECT.GUST,
    power: 40,
    type: TYPE.FLYING,
    accuracy: 100,
    pp: 35,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.WING_ATTACK] =
{
    effect: EFFECT.HIT,
    power: 60,
    type: TYPE.FLYING,
    accuracy: 100,
    pp: 35,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.WHIRLWIND] =
{
    effect: EFFECT.ROAR,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: -6,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FLY] =
{
    effect: EFFECT.SEMI_INVULNERABLE,
    power: 70,
    type: TYPE.FLYING,
    accuracy: 95,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BIND] =
{
    effect: EFFECT.TRAP,
    power: 15,
    type: TYPE.NORMAL,
    accuracy: 75,
    pp: 20,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SLAM] =
{
    effect: EFFECT.HIT,
    power: 80,
    type: TYPE.NORMAL,
    accuracy: 75,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.VINE_WHIP] =
{
    effect: EFFECT.HIT,
    power: 35,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.STOMP] =
{
    effect: EFFECT.FLINCH_MINIMIZE_HIT,
    power: 65,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DOUBLE_KICK] =
{
    effect: EFFECT.DOUBLE_HIT,
    power: 30,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.MEGA_KICK] =
{
    effect: EFFECT.HIT,
    power: 120,
    type: TYPE.NORMAL,
    accuracy: 75,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.JUMP_KICK] =
{
    effect: EFFECT.RECOIL_IF_MISS,
    power: 70,
    type: TYPE.FIGHTING,
    accuracy: 95,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ROLLING_KICK] =
{
    effect: EFFECT.FLINCH_HIT,
    power: 60,
    type: TYPE.FIGHTING,
    accuracy: 85,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SAND_ATTACK] =
{
    effect: EFFECT.ACCURACY_DOWN,
    power: 0,
    type: TYPE.GROUND,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HEADBUTT] =
{
    effect: EFFECT.FLINCH_HIT,
    power: 70,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HORN_ATTACK] =
{
    effect: EFFECT.HIT,
    power: 65,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FURY_ATTACK] =
{
    effect: EFFECT.MULTI_HIT,
    power: 15,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.HORN_DRILL] =
{
    effect: EFFECT.OHKO,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 30,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.TACKLE] =
{
    effect: EFFECT.HIT,
    power: 35,
    type: TYPE.NORMAL,
    accuracy: 95,
    pp: 35,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BODY_SLAM] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 85,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.WRAP] =
{
    effect: EFFECT.TRAP,
    power: 15,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 20,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.TAKE_DOWN] =
{
    effect: EFFECT.RECOIL,
    power: 90,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.THRASH] =
{
    effect: EFFECT.RAMPAGE,
    power: 90,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.RANDOM,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DOUBLE_EDGE] =
{
    effect: EFFECT.DOUBLE_EDGE,
    power: 120,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.TAIL_WHIP] =
{
    effect: EFFECT.DEFENSE_DOWN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.POISON_STING] =
{
    effect: EFFECT.POISON_HIT,
    power: 15,
    type: TYPE.POISON,
    accuracy: 100,
    pp: 35,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.TWINEEDLE] =
{
    effect: EFFECT.TWINEEDLE,
    power: 25,
    type: TYPE.BUG,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PIN_MISSILE] =
{
    effect: EFFECT.MULTI_HIT,
    power: 14,
    type: TYPE.BUG,
    accuracy: 85,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.LEER] =
{
    effect: EFFECT.DEFENSE_DOWN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.BITE] =
{
    effect: EFFECT.FLINCH_HIT,
    power: 60,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.GROWL] =
{
    effect: EFFECT.ATTACK_DOWN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ROAR] =
{
    effect: EFFECT.ROAR,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: -6,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SING] =
{
    effect: EFFECT.SLEEP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 55,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SUPERSONIC] =
{
    effect: EFFECT.CONFUSE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 55,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SONIC_BOOM] =
{
    effect: EFFECT.SONICBOOM,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 90,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DISABLE] =
{
    effect: EFFECT.DISABLE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 55,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ACID] =
{
    effect: EFFECT.DEFENSE_DOWN_HIT,
    power: 40,
    type: TYPE.POISON,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.EMBER] =
{
    effect: EFFECT.BURN_HIT,
    power: 40,
    type: TYPE.FIRE,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FLAMETHROWER] =
{
    effect: EFFECT.BURN_HIT,
    power: 95,
    type: TYPE.FIRE,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MIST] =
{
    effect: EFFECT.MIST,
    power: 0,
    type: TYPE.ICE,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.WATER_GUN] =
{
    effect: EFFECT.HIT,
    power: 40,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.HYDRO_PUMP] =
{
    effect: EFFECT.HIT,
    power: 120,
    type: TYPE.WATER,
    accuracy: 80,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SURF] =
{
    effect: EFFECT.HIT,
    power: 95,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ICE_BEAM] =
{
    effect: EFFECT.FREEZE_HIT,
    power: 95,
    type: TYPE.ICE,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.BLIZZARD] =
{
    effect: EFFECT.FREEZE_HIT,
    power: 120,
    type: TYPE.ICE,
    accuracy: 70,
    pp: 5,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PSYBEAM] =
{
    effect: EFFECT.CONFUSE_HIT,
    power: 65,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.BUBBLE_BEAM] =
{
    effect: EFFECT.SPEED_DOWN_HIT,
    power: 65,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.AURORA_BEAM] =
{
    effect: EFFECT.ATTACK_DOWN_HIT,
    power: 65,
    type: TYPE.ICE,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HYPER_BEAM] =
{
    effect: EFFECT.RECHARGE,
    power: 150,
    type: TYPE.NORMAL,
    accuracy: 90,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.PECK] =
{
    effect: EFFECT.HIT,
    power: 35,
    type: TYPE.FLYING,
    accuracy: 100,
    pp: 35,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DRILL_PECK] =
{
    effect: EFFECT.HIT,
    power: 80,
    type: TYPE.FLYING,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SUBMISSION] =
{
    effect: EFFECT.RECOIL,
    power: 80,
    type: TYPE.FIGHTING,
    accuracy: 80,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.LOW_KICK] =
{
    effect: EFFECT.LOW_KICK,
    power: 1,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.COUNTER] =
{
    effect: EFFECT.COUNTER,
    power: 1,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: -5,
    flags: [ FLAG.MAKES_CONTACT, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SEISMIC_TOSS] =
{
    effect: EFFECT.LEVEL_DAMAGE,
    power: 1,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.STRENGTH] =
{
    effect: EFFECT.HIT,
    power: 80,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ABSORB] =
{
    effect: EFFECT.ABSORB,
    power: 20,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MEGA_DRAIN] =
{
    effect: EFFECT.ABSORB,
    power: 40,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.LEECH_SEED] =
{
    effect: EFFECT.LEECH_SEED,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.GROWTH] =
{
    effect: EFFECT.SPECIAL_ATTACK_UP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.RAZOR_LEAF] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 55,
    type: TYPE.GRASS,
    accuracy: 95,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SOLAR_BEAM] =
{
    effect: EFFECT.SOLARBEAM,
    power: 120,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.POISON_POWDER] =
{
    effect: EFFECT.POISON,
    power: 0,
    type: TYPE.POISON,
    accuracy: 75,
    pp: 35,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.STUN_SPORE] =
{
    effect: EFFECT.PARALYZE,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 75,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SLEEP_POWDER] =
{
    effect: EFFECT.SLEEP,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 75,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PETAL_DANCE] =
{
    effect: EFFECT.RAMPAGE,
    power: 70,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.RANDOM,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.STRING_SHOT] =
{
    effect: EFFECT.SPEED_DOWN,
    power: 0,
    type: TYPE.BUG,
    accuracy: 95,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DRAGON_RAGE] =
{
    effect: EFFECT.DRAGON_RAGE,
    power: 1,
    type: TYPE.DRAGON,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FIRE_SPIN] =
{
    effect: EFFECT.TRAP,
    power: 15,
    type: TYPE.FIRE,
    accuracy: 70,
    pp: 15,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.THUNDER_SHOCK] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 40,
    type: TYPE.ELECTRIC,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.THUNDERBOLT] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 95,
    type: TYPE.ELECTRIC,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.THUNDER_WAVE] =
{
    effect: EFFECT.PARALYZE,
    power: 0,
    type: TYPE.ELECTRIC,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.THUNDER] =
{
    effect: EFFECT.THUNDER,
    power: 120,
    type: TYPE.ELECTRIC,
    accuracy: 70,
    pp: 10,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ROCK_THROW] =
{
    effect: EFFECT.HIT,
    power: 50,
    type: TYPE.ROCK,
    accuracy: 90,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.EARTHQUAKE] =
{
    effect: EFFECT.EARTHQUAKE,
    power: 100,
    type: TYPE.GROUND,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.FOES_AND_ALLY,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FISSURE] =
{
    effect: EFFECT.OHKO,
    power: 1,
    type: TYPE.GROUND,
    accuracy: 30,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DIG] =
{
    effect: EFFECT.SEMI_INVULNERABLE,
    power: 60,
    type: TYPE.GROUND,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.TOXIC] =
{
    effect: EFFECT.TOXIC,
    power: 0,
    type: TYPE.POISON,
    accuracy: 85,
    pp: 10,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.CONFUSION] =
{
    effect: EFFECT.CONFUSE_HIT,
    power: 50,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PSYCHIC] =
{
    effect: EFFECT.SPECIAL_DEFENSE_DOWN_HIT,
    power: 90,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HYPNOSIS] =
{
    effect: EFFECT.SLEEP,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 60,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MEDITATE] =
{
    effect: EFFECT.ATTACK_UP,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.AGILITY] =
{
    effect: EFFECT.SPEED_UP_2,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.QUICK_ATTACK] =
{
    effect: EFFECT.QUICK_ATTACK,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 1,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.RAGE] =
{
    effect: EFFECT.RAGE,
    power: 20,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.TELEPORT] =
{
    effect: EFFECT.TELEPORT,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.NIGHT_SHADE] =
{
    effect: EFFECT.LEVEL_DAMAGE,
    power: 1,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.MIMIC] =
{
    effect: EFFECT.MIMIC,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.SCREECH] =
{
    effect: EFFECT.DEFENSE_DOWN_2,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DOUBLE_TEAM] =
{
    effect: EFFECT.EVASION_UP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.RECOVER] =
{
    effect: EFFECT.RESTORE_HP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.HARDEN] =
{
    effect: EFFECT.DEFENSE_UP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.MINIMIZE] =
{
    effect: EFFECT.MINIMIZE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.SMOKESCREEN] =
{
    effect: EFFECT.ACCURACY_DOWN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.CONFUSE_RAY] =
{
    effect: EFFECT.CONFUSE,
    power: 0,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.WITHDRAW] =
{
    effect: EFFECT.DEFENSE_UP,
    power: 0,
    type: TYPE.WATER,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.DEFENSE_CURL] =
{
    effect: EFFECT.DEFENSE_CURL,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.BARRIER] =
{
    effect: EFFECT.DEFENSE_UP_2,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.LIGHT_SCREEN] =
{
    effect: EFFECT.LIGHT_SCREEN,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.HAZE] =
{
    effect: EFFECT.HAZE,
    power: 0,
    type: TYPE.ICE,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.REFLECT] =
{
    effect: EFFECT.REFLECT,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.FOCUS_ENERGY] =
{
    effect: EFFECT.FOCUS_ENERGY,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.BIDE] =
{
    effect: EFFECT.BIDE,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.METRONOME] =
{
    effect: EFFECT.METRONOME,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.MIRROR_MOVE] =
{
    effect: EFFECT.MIRROR_MOVE,
    power: 0,
    type: TYPE.FLYING,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.SELF_DESTRUCT] =
{
    effect: EFFECT.EXPLOSION,
    power: 200,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.FOES_AND_ALLY,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.EGG_BOMB] =
{
    effect: EFFECT.HIT,
    power: 100,
    type: TYPE.NORMAL,
    accuracy: 75,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.LICK] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 20,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SMOG] =
{
    effect: EFFECT.POISON_HIT,
    power: 20,
    type: TYPE.POISON,
    accuracy: 70,
    pp: 20,
    secondaryEffectChance: 40,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SLUDGE] =
{
    effect: EFFECT.POISON_HIT,
    power: 65,
    type: TYPE.POISON,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.BONE_CLUB] =
{
    effect: EFFECT.FLINCH_HIT,
    power: 65,
    type: TYPE.GROUND,
    accuracy: 85,
    pp: 20,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FIRE_BLAST] =
{
    effect: EFFECT.BURN_HIT,
    power: 120,
    type: TYPE.FIRE,
    accuracy: 85,
    pp: 5,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.WATERFALL] =
{
    effect: EFFECT.HIT,
    power: 80,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.CLAMP] =
{
    effect: EFFECT.TRAP,
    power: 35,
    type: TYPE.WATER,
    accuracy: 75,
    pp: 10,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SWIFT] =
{
    effect: EFFECT.ALWAYS_HIT,
    power: 60,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SKULL_BASH] =
{
    effect: EFFECT.SKULL_BASH,
    power: 100,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SPIKE_CANNON] =
{
    effect: EFFECT.MULTI_HIT,
    power: 20,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.CONSTRICT] =
{
    effect: EFFECT.SPEED_DOWN_HIT,
    power: 10,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 35,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.AMNESIA] =
{
    effect: EFFECT.SPECIAL_DEFENSE_UP_2,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.KINESIS] =
{
    effect: EFFECT.ACCURACY_DOWN,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 80,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SOFT_BOILED] =
{
    effect: EFFECT.SOFTBOILED,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HI_JUMP_KICK] =
{
    effect: EFFECT.RECOIL_IF_MISS,
    power: 85,
    type: TYPE.FIGHTING,
    accuracy: 90,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.GLARE] =
{
    effect: EFFECT.PARALYZE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 75,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DREAM_EATER] =
{
    effect: EFFECT.DREAM_EATER,
    power: 100,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.POISON_GAS] =
{
    effect: EFFECT.POISON,
    power: 0,
    type: TYPE.POISON,
    accuracy: 55,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.BARRAGE] =
{
    effect: EFFECT.MULTI_HIT,
    power: 15,
    type: TYPE.NORMAL,
    accuracy: 85,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.LEECH_LIFE] =
{
    effect: EFFECT.ABSORB,
    power: 20,
    type: TYPE.BUG,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.LOVELY_KISS] =
{
    effect: EFFECT.SLEEP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 75,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SKY_ATTACK] =
{
    effect: EFFECT.SKY_ATTACK,
    power: 140,
    type: TYPE.FLYING,
    accuracy: 90,
    pp: 5,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.TRANSFORM] =
{
    effect: EFFECT.TRANSFORM,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.BUBBLE] =
{
    effect: EFFECT.SPEED_DOWN_HIT,
    power: 20,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DIZZY_PUNCH] =
{
    effect: EFFECT.CONFUSE_HIT,
    power: 70,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SPORE] =
{
    effect: EFFECT.SLEEP,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FLASH] =
{
    effect: EFFECT.ACCURACY_DOWN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 70,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PSYWAVE] =
{
    effect: EFFECT.PSYWAVE,
    power: 1,
    type: TYPE.PSYCHIC,
    accuracy: 80,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SPLASH] =
{
    effect: EFFECT.SPLASH,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.ACID_ARMOR] =
{
    effect: EFFECT.DEFENSE_UP_2,
    power: 0,
    type: TYPE.POISON,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.CRABHAMMER] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 90,
    type: TYPE.WATER,
    accuracy: 85,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.EXPLOSION] =
{
    effect: EFFECT.EXPLOSION,
    power: 250,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.FOES_AND_ALLY,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FURY_SWIPES] =
{
    effect: EFFECT.MULTI_HIT,
    power: 18,
    type: TYPE.NORMAL,
    accuracy: 80,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BONEMERANG] =
{
    effect: EFFECT.DOUBLE_HIT,
    power: 50,
    type: TYPE.GROUND,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.REST] =
{
    effect: EFFECT.REST,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.ROCK_SLIDE] =
{
    effect: EFFECT.FLINCH_HIT,
    power: 75,
    type: TYPE.ROCK,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HYPER_FANG] =
{
    effect: EFFECT.FLINCH_HIT,
    power: 80,
    type: TYPE.NORMAL,
    accuracy: 90,
    pp: 15,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SHARPEN] =
{
    effect: EFFECT.ATTACK_UP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.CONVERSION] =
{
    effect: EFFECT.CONVERSION,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.TRI_ATTACK] =
{
    effect: EFFECT.TRI_ATTACK,
    power: 80,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SUPER_FANG] =
{
    effect: EFFECT.SUPER_FANG,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SLASH] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 70,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SUBSTITUTE] =
{
    effect: EFFECT.SUBSTITUTE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.STRUGGLE] =
{
    effect: EFFECT.RECOIL,
    power: 50,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 1,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SKETCH] =
{
    effect: EFFECT.SKETCH,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 1,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.TRIPLE_KICK] =
{
    effect: EFFECT.TRIPLE_KICK,
    power: 10,
    type: TYPE.FIGHTING,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.THIEF] =
{
    effect: EFFECT.THIEF,
    power: 40,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SPIDER_WEB] =
{
    effect: EFFECT.MEAN_LOOK,
    power: 0,
    type: TYPE.BUG,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MIND_READER] =
{
    effect: EFFECT.LOCK_ON,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.NIGHTMARE] =
{
    effect: EFFECT.NIGHTMARE,
    power: 0,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FLAME_WHEEL] =
{
    effect: EFFECT.THAW_HIT,
    power: 60,
    type: TYPE.FIRE,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SNORE] =
{
    effect: EFFECT.SNORE,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.CURSE] =
{
    effect: EFFECT.CURSE,
    power: 0,
    type: TYPE.MYSTERY,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.FLAIL] =
{
    effect: EFFECT.FLAIL,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.CONVERSION_2] =
{
    effect: EFFECT.CONVERSION_2,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.AEROBLAST] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 100,
    type: TYPE.FLYING,
    accuracy: 95,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.COTTON_SPORE] =
{
    effect: EFFECT.SPEED_DOWN_2,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 85,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.REVERSAL] =
{
    effect: EFFECT.FLAIL,
    power: 1,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SPITE] =
{
    effect: EFFECT.SPITE,
    power: 0,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.POWDER_SNOW] =
{
    effect: EFFECT.FREEZE_HIT,
    power: 40,
    type: TYPE.ICE,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PROTECT] =
{
    effect: EFFECT.PROTECT,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 3,
    flags: [ 0 ]
} 
BattleMoves[MOVE.MACH_PUNCH] =
{
    effect: EFFECT.QUICK_ATTACK,
    power: 40,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 1,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SCARY_FACE] =
{
    effect: EFFECT.SPEED_DOWN_2,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FAINT_ATTACK] =
{
    effect: EFFECT.ALWAYS_HIT,
    power: 60,
    type: TYPE.DARK,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SWEET_KISS] =
{
    effect: EFFECT.CONFUSE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 75,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.BELLY_DRUM] =
{
    effect: EFFECT.BELLY_DRUM,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.SLUDGE_BOMB] =
{
    effect: EFFECT.POISON_HIT,
    power: 90,
    type: TYPE.POISON,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MUD_SLAP] =
{
    effect: EFFECT.ACCURACY_DOWN_HIT,
    power: 20,
    type: TYPE.GROUND,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.OCTAZOOKA] =
{
    effect: EFFECT.ACCURACY_DOWN_HIT,
    power: 65,
    type: TYPE.WATER,
    accuracy: 85,
    pp: 10,
    secondaryEffectChance: 50,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SPIKES] =
{
    effect: EFFECT.SPIKES,
    power: 0,
    type: TYPE.GROUND,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.OPPONENTS_FIELD,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.ZAP_CANNON] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 100,
    type: TYPE.ELECTRIC,
    accuracy: 50,
    pp: 5,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FORESIGHT] =
{
    effect: EFFECT.FORESIGHT,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DESTINY_BOND] =
{
    effect: EFFECT.DESTINY_BOND,
    power: 0,
    type: TYPE.GHOST,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.PERISH_SONG] =
{
    effect: EFFECT.PERISH_SONG,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.ICY_WIND] =
{
    effect: EFFECT.SPEED_DOWN_HIT,
    power: 55,
    type: TYPE.ICE,
    accuracy: 95,
    pp: 15,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DETECT] =
{
    effect: EFFECT.PROTECT,
    power: 0,
    type: TYPE.FIGHTING,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 3,
    flags: [ 0 ]
} 
BattleMoves[MOVE.BONE_RUSH] =
{
    effect: EFFECT.MULTI_HIT,
    power: 25,
    type: TYPE.GROUND,
    accuracy: 80,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.LOCK_ON] =
{
    effect: EFFECT.LOCK_ON,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.OUTRAGE] =
{
    effect: EFFECT.RAMPAGE,
    power: 90,
    type: TYPE.DRAGON,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.RANDOM,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SANDSTORM] =
{
    effect: EFFECT.SANDSTORM,
    power: 0,
    type: TYPE.ROCK,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.GIGA_DRAIN] =
{
    effect: EFFECT.ABSORB,
    power: 60,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ENDURE] =
{
    effect: EFFECT.ENDURE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 3,
    flags: [ 0 ]
} 
BattleMoves[MOVE.CHARM] =
{
    effect: EFFECT.ATTACK_DOWN_2,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ROLLOUT] =
{
    effect: EFFECT.ROLLOUT,
    power: 30,
    type: TYPE.ROCK,
    accuracy: 90,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FALSE_SWIPE] =
{
    effect: EFFECT.FALSE_SWIPE,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SWAGGER] =
{
    effect: EFFECT.SWAGGER,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 90,
    pp: 15,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MILK_DRINK] =
{
    effect: EFFECT.SOFTBOILED,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.SPARK] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 65,
    type: TYPE.ELECTRIC,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FURY_CUTTER] =
{
    effect: EFFECT.FURY_CUTTER,
    power: 10,
    type: TYPE.BUG,
    accuracy: 95,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.STEEL_WING] =
{
    effect: EFFECT.DEFENSE_UP_HIT,
    power: 70,
    type: TYPE.STEEL,
    accuracy: 90,
    pp: 25,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.MEAN_LOOK] =
{
    effect: EFFECT.MEAN_LOOK,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ATTRACT] =
{
    effect: EFFECT.ATTRACT,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SLEEP_TALK] =
{
    effect: EFFECT.SLEEP_TALK,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.HEAL_BELL] =
{
    effect: EFFECT.HEAL_BELL,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.RETURN] =
{
    effect: EFFECT.RETURN,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.PRESENT] =
{
    effect: EFFECT.PRESENT,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 90,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FRUSTRATION] =
{
    effect: EFFECT.FRUSTRATION,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SAFEGUARD] =
{
    effect: EFFECT.SAFEGUARD,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.PAIN_SPLIT] =
{
    effect: EFFECT.PAIN_SPLIT,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SACRED_FIRE] =
{
    effect: EFFECT.THAW_HIT,
    power: 100,
    type: TYPE.FIRE,
    accuracy: 95,
    pp: 5,
    secondaryEffectChance: 50,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MAGNITUDE] =
{
    effect: EFFECT.MAGNITUDE,
    power: 1,
    type: TYPE.GROUND,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.FOES_AND_ALLY,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DYNAMIC_PUNCH] =
{
    effect: EFFECT.CONFUSE_HIT,
    power: 100,
    type: TYPE.FIGHTING,
    accuracy: 50,
    pp: 5,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MEGAHORN] =
{
    effect: EFFECT.HIT,
    power: 120,
    type: TYPE.BUG,
    accuracy: 85,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DRAGON_BREATH] =
{
    effect: EFFECT.PARALYZE_HIT,
    power: 60,
    type: TYPE.DRAGON,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BATON_PASS] =
{
    effect: EFFECT.BATON_PASS,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.ENCORE] =
{
    effect: EFFECT.ENCORE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PURSUIT] =
{
    effect: EFFECT.PURSUIT,
    power: 40,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.RAPID_SPIN] =
{
    effect: EFFECT.RAPID_SPIN,
    power: 20,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SWEET_SCENT] =
{
    effect: EFFECT.EVASION_DOWN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.IRON_TAIL] =
{
    effect: EFFECT.DEFENSE_DOWN_HIT,
    power: 100,
    type: TYPE.STEEL,
    accuracy: 75,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.METAL_CLAW] =
{
    effect: EFFECT.ATTACK_UP_HIT,
    power: 50,
    type: TYPE.STEEL,
    accuracy: 95,
    pp: 35,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.VITAL_THROW] =
{
    effect: EFFECT.VITAL_THROW,
    power: 70,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: -1,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.MORNING_SUN] =
{
    effect: EFFECT.MORNING_SUN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.SYNTHESIS] =
{
    effect: EFFECT.SYNTHESIS,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.MOONLIGHT] =
{
    effect: EFFECT.MOONLIGHT,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.HIDDEN_POWER] =
{
    effect: EFFECT.HIDDEN_POWER,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.CROSS_CHOP] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 100,
    type: TYPE.FIGHTING,
    accuracy: 80,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.TWISTER] =
{
    effect: EFFECT.TWISTER,
    power: 40,
    type: TYPE.DRAGON,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.RAIN_DANCE] =
{
    effect: EFFECT.RAIN_DANCE,
    power: 0,
    type: TYPE.WATER,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.SUNNY_DAY] =
{
    effect: EFFECT.SUNNY_DAY,
    power: 0,
    type: TYPE.FIRE,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.CRUNCH] =
{
    effect: EFFECT.SPECIAL_DEFENSE_DOWN_HIT,
    power: 80,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MIRROR_COAT] =
{
    effect: EFFECT.MIRROR_COAT,
    power: 1,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: -5,
    flags: [ FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.PSYCH_UP] =
{
    effect: EFFECT.PSYCH_UP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.EXTREME_SPEED] =
{
    effect: EFFECT.QUICK_ATTACK,
    power: 80,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 1,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ANCIENT_POWER] =
{
    effect: EFFECT.ALL_STATS_UP_HIT,
    power: 60,
    type: TYPE.ROCK,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SHADOW_BALL] =
{
    effect: EFFECT.SPECIAL_DEFENSE_DOWN_HIT,
    power: 80,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FUTURE_SIGHT] =
{
    effect: EFFECT.FUTURE_SIGHT,
    power: 80,
    type: TYPE.PSYCHIC,
    accuracy: 90,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.ROCK_SMASH] =
{
    effect: EFFECT.DEFENSE_DOWN_HIT,
    power: 20,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 50,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.WHIRLPOOL] =
{
    effect: EFFECT.TRAP,
    power: 15,
    type: TYPE.WATER,
    accuracy: 70,
    pp: 15,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BEAT_UP] =
{
    effect: EFFECT.BEAT_UP,
    power: 10,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FAKE_OUT] =
{
    effect: EFFECT.FAKE_OUT,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 1,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.UPROAR] =
{
    effect: EFFECT.UPROAR,
    power: 50,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.RANDOM,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.STOCKPILE] =
{
    effect: EFFECT.STOCKPILE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.SPIT_UP] =
{
    effect: EFFECT.SPIT_UP,
    power: 100,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SWALLOW] =
{
    effect: EFFECT.SWALLOW,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.HEAT_WAVE] =
{
    effect: EFFECT.BURN_HIT,
    power: 100,
    type: TYPE.FIRE,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HAIL] =
{
    effect: EFFECT.HAIL,
    power: 0,
    type: TYPE.ICE,
    accuracy: 0,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.TORMENT] =
{
    effect: EFFECT.TORMENT,
    power: 0,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FLATTER] =
{
    effect: EFFECT.FLATTER,
    power: 0,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.WILL_O_WISP] =
{
    effect: EFFECT.WILL_O_WISP,
    power: 0,
    type: TYPE.FIRE,
    accuracy: 75,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MEMENTO] =
{
    effect: EFFECT.MEMENTO,
    power: 0,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FACADE] =
{
    effect: EFFECT.FACADE,
    power: 70,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FOCUS_PUNCH] =
{
    effect: EFFECT.FOCUS_PUNCH,
    power: 150,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: -3,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.SMELLING_SALT] =
{
    effect: EFFECT.SMELLINGSALT,
    power: 60,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FOLLOW_ME] =
{
    effect: EFFECT.FOLLOW_ME,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 3,
    flags: [ 0 ]
} 
BattleMoves[MOVE.NATURE_POWER] =
{
    effect: EFFECT.NATURE_POWER,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.CHARGE] =
{
    effect: EFFECT.CHARGE,
    power: 0,
    type: TYPE.ELECTRIC,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.TAUNT] =
{
    effect: EFFECT.TAUNT,
    power: 0,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.HELPING_HAND] =
{
    effect: EFFECT.HELPING_HAND,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 5,
    flags: [ 0 ]
} 
BattleMoves[MOVE.TRICK] =
{
    effect: EFFECT.TRICK,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ROLE_PLAY] =
{
    effect: EFFECT.ROLE_PLAY,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.WISH] =
{
    effect: EFFECT.WISH,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.ASSIST] =
{
    effect: EFFECT.ASSIST,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.INGRAIN] =
{
    effect: EFFECT.INGRAIN,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.SUPERPOWER] =
{
    effect: EFFECT.SUPERPOWER,
    power: 120,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MAGIC_COAT] =
{
    effect: EFFECT.MAGIC_COAT,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: 4,
    flags: [ 0 ]
} 
BattleMoves[MOVE.RECYCLE] =
{
    effect: EFFECT.RECYCLE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.REVENGE] =
{
    effect: EFFECT.REVENGE,
    power: 60,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: -4,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BRICK_BREAK] =
{
    effect: EFFECT.BRICK_BREAK,
    power: 75,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.YAWN] =
{
    effect: EFFECT.YAWN,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.KNOCK_OFF] =
{
    effect: EFFECT.KNOCK_OFF,
    power: 20,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ENDEAVOR] =
{
    effect: EFFECT.ENDEAVOR,
    power: 1,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ERUPTION] =
{
    effect: EFFECT.ERUPTION,
    power: 150,
    type: TYPE.FIRE,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SKILL_SWAP] =
{
    effect: EFFECT.SKILL_SWAP,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.IMPRISON] =
{
    effect: EFFECT.IMPRISON,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.REFRESH] =
{
    effect: EFFECT.REFRESH,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.GRUDGE] =
{
    effect: EFFECT.GRUDGE,
    power: 0,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SNATCH] =
{
    effect: EFFECT.SNATCH,
    power: 0,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.DEPENDS,
    priority: 4,
    flags: [ 0 ]
} 
BattleMoves[MOVE.SECRET_POWER] =
{
    effect: EFFECT.SECRET_POWER,
    power: 70,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.DIVE] =
{
    effect: EFFECT.SEMI_INVULNERABLE,
    power: 60,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ARM_THRUST] =
{
    effect: EFFECT.MULTI_HIT,
    power: 15,
    type: TYPE.FIGHTING,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.CAMOUFLAGE] =
{
    effect: EFFECT.CAMOUFLAGE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.TAIL_GLOW] =
{
    effect: EFFECT.SPECIAL_ATTACK_UP_2,
    power: 0,
    type: TYPE.BUG,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.LUSTER_PURGE] =
{
    effect: EFFECT.SPECIAL_DEFENSE_DOWN_HIT,
    power: 70,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 50,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MIST_BALL] =
{
    effect: EFFECT.SPECIAL_ATTACK_DOWN_HIT,
    power: 70,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 50,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.FEATHER_DANCE] =
{
    effect: EFFECT.ATTACK_DOWN_2,
    power: 0,
    type: TYPE.FLYING,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.TEETER_DANCE] =
{
    effect: EFFECT.TEETER_DANCE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.FOES_AND_ALLY,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED ]
} 
BattleMoves[MOVE.BLAZE_KICK] =
{
    effect: EFFECT.BLAZE_KICK,
    power: 85,
    type: TYPE.FIRE,
    accuracy: 90,
    pp: 10,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MUD_SPORT] =
{
    effect: EFFECT.MUD_SPORT,
    power: 0,
    type: TYPE.GROUND,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.ICE_BALL] =
{
    effect: EFFECT.ROLLOUT,
    power: 30,
    type: TYPE.ICE,
    accuracy: 90,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.NEEDLE_ARM] =
{
    effect: EFFECT.FLINCH_MINIMIZE_HIT,
    power: 60,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SLACK_OFF] =
{
    effect: EFFECT.RESTORE_HP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.HYPER_VOICE] =
{
    effect: EFFECT.HIT,
    power: 90,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.POISON_FANG] =
{
    effect: EFFECT.POISON_FANG,
    power: 50,
    type: TYPE.POISON,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.CRUSH_CLAW] =
{
    effect: EFFECT.DEFENSE_DOWN_HIT,
    power: 75,
    type: TYPE.NORMAL,
    accuracy: 95,
    pp: 10,
    secondaryEffectChance: 50,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.BLAST_BURN] =
{
    effect: EFFECT.RECHARGE,
    power: 150,
    type: TYPE.FIRE,
    accuracy: 90,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.HYDRO_CANNON] =
{
    effect: EFFECT.RECHARGE,
    power: 150,
    type: TYPE.WATER,
    accuracy: 90,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.METEOR_MASH] =
{
    effect: EFFECT.ATTACK_UP_HIT,
    power: 100,
    type: TYPE.STEEL,
    accuracy: 85,
    pp: 10,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ASTONISH] =
{
    effect: EFFECT.FLINCH_MINIMIZE_HIT,
    power: 30,
    type: TYPE.GHOST,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.WEATHER_BALL] =
{
    effect: EFFECT.WEATHER_BALL,
    power: 50,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.AROMATHERAPY] =
{
    effect: EFFECT.HEAL_BELL,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 0,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.FAKE_TEARS] =
{
    effect: EFFECT.SPECIAL_DEFENSE_DOWN_2,
    power: 0,
    type: TYPE.DARK,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.AIR_CUTTER] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 55,
    type: TYPE.FLYING,
    accuracy: 95,
    pp: 25,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.OVERHEAT] =
{
    effect: EFFECT.OVERHEAT,
    power: 140,
    type: TYPE.FIRE,
    accuracy: 90,
    pp: 5,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ODOR_SLEUTH] =
{
    effect: EFFECT.FORESIGHT,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.ROCK_TOMB] =
{
    effect: EFFECT.SPEED_DOWN_HIT,
    power: 50,
    type: TYPE.ROCK,
    accuracy: 80,
    pp: 10,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SILVER_WIND] =
{
    effect: EFFECT.ALL_STATS_UP_HIT,
    power: 60,
    type: TYPE.BUG,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.METAL_SOUND] =
{
    effect: EFFECT.SPECIAL_DEFENSE_DOWN_2,
    power: 0,
    type: TYPE.STEEL,
    accuracy: 85,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.GRASS_WHISTLE] =
{
    effect: EFFECT.SLEEP,
    power: 0,
    type: TYPE.GRASS,
    accuracy: 55,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.TICKLE] =
{
    effect: EFFECT.TICKLE,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.COSMIC_POWER] =
{
    effect: EFFECT.COSMIC_POWER,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.WATER_SPOUT] =
{
    effect: EFFECT.ERUPTION,
    power: 150,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SIGNAL_BEAM] =
{
    effect: EFFECT.CONFUSE_HIT,
    power: 75,
    type: TYPE.BUG,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SHADOW_PUNCH] =
{
    effect: EFFECT.ALWAYS_HIT,
    power: 60,
    type: TYPE.GHOST,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.EXTRASENSORY] =
{
    effect: EFFECT.FLINCH_MINIMIZE_HIT,
    power: 80,
    type: TYPE.PSYCHIC,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.SKY_UPPERCUT] =
{
    effect: EFFECT.SKY_UPPERCUT,
    power: 85,
    type: TYPE.FIGHTING,
    accuracy: 90,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SAND_TOMB] =
{
    effect: EFFECT.TRAP,
    power: 15,
    type: TYPE.GROUND,
    accuracy: 70,
    pp: 15,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SHEER_COLD] =
{
    effect: EFFECT.OHKO,
    power: 1,
    type: TYPE.ICE,
    accuracy: 30,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.MUDDY_WATER] =
{
    effect: EFFECT.ACCURACY_DOWN_HIT,
    power: 95,
    type: TYPE.WATER,
    accuracy: 85,
    pp: 10,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.BOTH,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BULLET_SEED] =
{
    effect: EFFECT.MULTI_HIT,
    power: 10,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.AERIAL_ACE] =
{
    effect: EFFECT.ALWAYS_HIT,
    power: 60,
    type: TYPE.FLYING,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.ICICLE_SPEAR] =
{
    effect: EFFECT.MULTI_HIT,
    power: 10,
    type: TYPE.ICE,
    accuracy: 100,
    pp: 30,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.IRON_DEFENSE] =
{
    effect: EFFECT.DEFENSE_UP_2,
    power: 0,
    type: TYPE.STEEL,
    accuracy: 0,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.BLOCK] =
{
    effect: EFFECT.MEAN_LOOK,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MAGICCOAT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.HOWL] =
{
    effect: EFFECT.ATTACK_UP,
    power: 0,
    type: TYPE.NORMAL,
    accuracy: 0,
    pp: 40,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.DRAGON_CLAW] =
{
    effect: EFFECT.HIT,
    power: 80,
    type: TYPE.DRAGON,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.FRENZY_PLANT] =
{
    effect: EFFECT.RECHARGE,
    power: 150,
    type: TYPE.GRASS,
    accuracy: 90,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.BULK_UP] =
{
    effect: EFFECT.BULK_UP,
    power: 0,
    type: TYPE.FIGHTING,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.BOUNCE] =
{
    effect: EFFECT.SEMI_INVULNERABLE,
    power: 85,
    type: TYPE.FLYING,
    accuracy: 85,
    pp: 5,
    secondaryEffectChance: 30,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.MUD_SHOT] =
{
    effect: EFFECT.SPEED_DOWN_HIT,
    power: 55,
    type: TYPE.GROUND,
    accuracy: 95,
    pp: 15,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.POISON_TAIL] =
{
    effect: EFFECT.POISON_TAIL,
    power: 50,
    type: TYPE.POISON,
    accuracy: 100,
    pp: 25,
    secondaryEffectChance: 10,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.COVET] =
{
    effect: EFFECT.THIEF,
    power: 40,
    type: TYPE.NORMAL,
    accuracy: 100,
    pp: 40,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED ]
} 
BattleMoves[MOVE.VOLT_TACKLE] =
{
    effect: EFFECT.DOUBLE_EDGE,
    power: 120,
    type: TYPE.ELECTRIC,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.MAGICAL_LEAF] =
{
    effect: EFFECT.ALWAYS_HIT,
    power: 60,
    type: TYPE.GRASS,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.WATER_SPORT] =
{
    effect: EFFECT.WATER_SPORT,
    power: 0,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.CALM_MIND] =
{
    effect: EFFECT.CALM_MIND,
    power: 0,
    type: TYPE.PSYCHIC,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.LEAF_BLADE] =
{
    effect: EFFECT.HIGH_CRITICAL,
    power: 70,
    type: TYPE.GRASS,
    accuracy: 100,
    pp: 15,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.MAKES_CONTACT, FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DRAGON_DANCE] =
{
    effect: EFFECT.DRAGON_DANCE,
    power: 0,
    type: TYPE.DRAGON,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.USER,
    priority: 0,
    flags: [ FLAG.SNATCH_AFFECTED ]
} 
BattleMoves[MOVE.ROCK_BLAST] =
{
    effect: EFFECT.MULTI_HIT,
    power: 25,
    type: TYPE.ROCK,
    accuracy: 80,
    pp: 10,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.SHOCK_WAVE] =
{
    effect: EFFECT.ALWAYS_HIT,
    power: 60,
    type: TYPE.ELECTRIC,
    accuracy: 0,
    pp: 20,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.WATER_PULSE] =
{
    effect: EFFECT.CONFUSE_HIT,
    power: 60,
    type: TYPE.WATER,
    accuracy: 100,
    pp: 20,
    secondaryEffectChance: 20,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
BattleMoves[MOVE.DOOM_DESIRE] =
{
    effect: EFFECT.FUTURE_SIGHT,
    power: 120,
    type: TYPE.STEEL,
    accuracy: 85,
    pp: 5,
    secondaryEffectChance: 0,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ 0 ]
} 
BattleMoves[MOVE.PSYCHO_BOOST] =
{
    effect: EFFECT.OVERHEAT,
    power: 140,
    type: TYPE.PSYCHIC,
    accuracy: 90,
    pp: 5,
    secondaryEffectChance: 100,
    target: MOVE_TARGET.SELECTED,
    priority: 0,
    flags: [ FLAG.PROTECT_AFFECTED, FLAG.MIRROR_MOVE_AFFECTED, FLAG.KINGSROCK_AFFECTED ]
} 
