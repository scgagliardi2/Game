import { MOVE } from "../../move/data/Moves"
import { TUTOR_MOVE } from "../../move/TutorMoves";
import { SPECIES } from "../data/Species"

export const TutorMoves: MOVE[] = []

TutorMoves[TUTOR_MOVE.MEGA_PUNCH] = MOVE.MEGA_PUNCH
TutorMoves[TUTOR_MOVE.SWORDS_DANCE] = MOVE.SWORDS_DANCE
TutorMoves[TUTOR_MOVE.MEGA_KICK] = MOVE.MEGA_KICK
TutorMoves[TUTOR_MOVE.BODY_SLAM] = MOVE.BODY_SLAM
TutorMoves[TUTOR_MOVE.DOUBLE_EDGE] = MOVE.DOUBLE_EDGE
TutorMoves[TUTOR_MOVE.COUNTER] = MOVE.COUNTER
TutorMoves[TUTOR_MOVE.SEISMIC_TOSS] = MOVE.SEISMIC_TOSS
TutorMoves[TUTOR_MOVE.MIMIC] = MOVE.MIMIC
TutorMoves[TUTOR_MOVE.METRONOME] = MOVE.METRONOME
TutorMoves[TUTOR_MOVE.SOFT_BOILED] = MOVE.SOFT_BOILED
TutorMoves[TUTOR_MOVE.DREAM_EATER] = MOVE.DREAM_EATER
TutorMoves[TUTOR_MOVE.THUNDER_WAVE] = MOVE.THUNDER_WAVE
TutorMoves[TUTOR_MOVE.EXPLOSION] = MOVE.EXPLOSION
TutorMoves[TUTOR_MOVE.ROCK_SLIDE] = MOVE.ROCK_SLIDE
TutorMoves[TUTOR_MOVE.SUBSTITUTE] = MOVE.SUBSTITUTE

export function TUTOR(move: TUTOR_MOVE) {
    return TutorMoves[move.valueOf()]
}

export const TutorLearnsets: any[][] = []

TutorLearnsets[SPECIES.NONE] = []

TutorLearnsets[SPECIES.BULBASAUR] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.IVYSAUR] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VENUSAUR] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CHARMANDER] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CHARMELEON] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CHARIZARD] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SQUIRTLE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WARTORTLE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BLASTOISE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CATERPIE] = []

TutorLearnsets[SPECIES.METAPOD] = []

TutorLearnsets[SPECIES.BUTTERFREE] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.DREAM_EATER)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WEEDLE] = []

TutorLearnsets[SPECIES.KAKUNA] = []

TutorLearnsets[SPECIES.BEEDRILL] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PIDGEY] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PIDGEOTTO] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PIDGEOT] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RATTATA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RATICATE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SPEAROW] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FEAROW] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.EKANS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ARBOK] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PIKACHU] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RAICHU] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SANDSHREW] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SANDSLASH] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NIDORAN_F] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NIDORINA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NIDOQUEEN] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NIDORAN_M] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NIDORINO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NIDOKING] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CLEFAIRY] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CLEFABLE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VULPIX] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NINETALES] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.JIGGLYPUFF] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.DREAM_EATER)
                            , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WIGGLYTUFF] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.DREAM_EATER)
                            , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ZUBAT] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GOLBAT] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ODDISH] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GLOOM] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VILEPLUME] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PARAS] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PARASECT] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VENONAT] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VENOMOTH] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DIGLETT] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DUGTRIO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MEOWTH] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PERSIAN] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PSYDUCK] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GOLDUCK] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MANKEY] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PRIMEAPE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GROWLITHE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ARCANINE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.POLIWAG] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.POLIWHIRL] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.POLIWRATH] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ABRA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.METRONOME)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KADABRA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ALAKAZAM] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MACHOP] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MACHOKE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MACHAMP] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BELLSPROUT] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WEEPINBELL] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VICTREEBEL] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TENTACOOL] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TENTACRUEL] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GEODUDE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GRAVELER] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GOLEM] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.METRONOME)
                    , TUTOR(TUTOR_MOVE.EXPLOSION)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PONYTA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RAPIDASH] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SLOWPOKE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SLOWBRO] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAGNEMITE] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAGNETON] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FARFETCHD] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DODUO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DODRIO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SEEL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DEWGONG] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GRIMER] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MUK] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.EXPLOSION)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHELLDER] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CLOYSTER] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GASTLY] = [TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HAUNTER] = [TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GENGAR] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ONIX] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.EXPLOSION)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DROWZEE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HYPNO] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.METRONOME)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KRABBY] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KINGLER] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VOLTORB] = [TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ELECTRODE] = [TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.EXEGGCUTE] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.EXEGGUTOR] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CUBONE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAROWAK] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HITMONLEE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HITMONCHAN] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.METRONOME)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LICKITUNG] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KOFFING] = [TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WEEZING] = [TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RHYHORN] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RHYDON] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CHANSEY] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TANGELA] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KANGASKHAN] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HORSEA] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SEADRA] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GOLDEEN] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SEAKING] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.STARYU] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.STARMIE] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MR_MIME] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SCYTHER] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.JYNX] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.METRONOME)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ELECTABUZZ] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAGMAR] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PINSIR] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TAUROS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAGIKARP] = []

TutorLearnsets[SPECIES.GYARADOS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LAPRAS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DITTO] = []

TutorLearnsets[SPECIES.EEVEE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VAPOREON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.JOLTEON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FLAREON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PORYGON] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.OMANYTE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.OMASTAR] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KABUTO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KABUTOPS] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.AERODACTYL] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SNORLAX] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ARTICUNO] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ZAPDOS] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MOLTRES] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DRATINI] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DRAGONAIR] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DRAGONITE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MEWTWO] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MEW] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.METRONOME)
                    , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.EXPLOSION)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CHIKORITA] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BAYLEEF] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MEGANIUM] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CYNDAQUIL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.QUILAVA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TYPHLOSION] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TOTODILE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CROCONAW] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FERALIGATR] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                            , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                            , TUTOR(TUTOR_MOVE.MEGA_KICK)
                            , TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SENTRET] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FURRET] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HOOTHOOT] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NOCTOWL] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LEDYBA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LEDIAN] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SPINARAK] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ARIADOS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CROBAT] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CHINCHOU] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LANTURN] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PICHU] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CLEFFA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.IGGLYBUFF] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TOGEPI] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TOGETIC] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NATU] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.XATU] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAREEP] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FLAAFFY] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.AMPHAROS] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BELLOSSOM] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MARILL] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.AZUMARILL] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SUDOWOODO] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.POLITOED] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HOPPIP] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SKIPLOOM] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.JUMPLUFF] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.AIPOM] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.METRONOME)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SUNKERN] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SUNFLORA] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.YANMA] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WOOPER] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.QUAGSIRE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ESPEON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.UMBREON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MURKROW] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SLOWKING] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MISDREAVUS] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.DREAM_EATER)
                            , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.UNOWN] = []

TutorLearnsets[SPECIES.WOBBUFFET] = []

TutorLearnsets[SPECIES.GIRAFARIG] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PINECO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FORRETRESS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                            , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.COUNTER)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.EXPLOSION)
                            , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DUNSPARCE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GLIGAR] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.STEELIX] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SNUBBULL] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GRANBULL] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.QWILFISH] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SCIZOR] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHUCKLE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HERACROSS] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SNEASEL] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TEDDIURSA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.URSARING] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SLUGMA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAGCARGO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SWINUB] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PILOSWINE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CORSOLA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.REMORAID] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.OCTILLERY] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DELIBIRD] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MANTINE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SKARMORY] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HOUNDOUR] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HOUNDOOM] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KINGDRA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PHANPY] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DONPHAN] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PORYGON2] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.STANTLER] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SMEARGLE] = []

TutorLearnsets[SPECIES.TYROGUE] = [TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HITMONTOP] = [TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SMOOCHUM] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ELEKID] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAGBY] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MILTANK] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BLISSEY] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SOFT_BOILED)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RAIKOU] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ENTEI] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SUICUNE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LARVITAR] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PUPITAR] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TYRANITAR] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LUGIA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HO_OH] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CELEBI] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TREECKO] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GROVYLE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SCEPTILE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TORCHIC] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.COMBUSKEN] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BLAZIKEN] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MUDKIP] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MARSHTOMP] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SWAMPERT] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.POOCHYENA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MIGHTYENA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ZIGZAGOON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LINOONE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WURMPLE] = []

TutorLearnsets[SPECIES.SILCOON] = []

TutorLearnsets[SPECIES.BEAUTIFLY] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CASCOON] = []

TutorLearnsets[SPECIES.DUSTOX] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LOTAD] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LOMBRE] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LUDICOLO] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SEEDOT] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NUZLEAF] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHIFTRY] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NINCADA] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NINJASK] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHEDINJA] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TAILLOW] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SWELLOW] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHROOMISH] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BRELOOM] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SPINDA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WINGULL] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PELIPPER] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SURSKIT] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MASQUERAIN] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                            , TUTOR(TUTOR_MOVE.MIMIC)
                            , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WAILMER] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WAILORD] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SKITTY] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DELCATTY] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KECLEON] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BALTOY] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CLAYDOL] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NOSEPASS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TORKOAL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SABLEYE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BARBOACH] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WHISCASH] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LUVDISC] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CORPHISH] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CRAWDAUNT] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FEEBAS] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MILOTIC] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CARVANHA] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHARPEDO] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TRAPINCH] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VIBRAVA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.FLYGON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAKUHITA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HARIYAMA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ELECTRIKE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MANECTRIC] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.NUMEL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CAMERUPT] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SPHEAL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SEALEO] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WALREIN] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CACNEA] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CACTURNE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SNORUNT] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GLALIE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LUNATONE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SOLROCK] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.AZURILL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SPOINK] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GRUMPIG] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.PLUSLE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MINUN] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                    , TUTOR(TUTOR_MOVE.MEGA_KICK)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.METRONOME)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MAWILE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MEDITITE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.MEDICHAM] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SWABLU] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ALTARIA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WYNAUT] = []

TutorLearnsets[SPECIES.DUSKULL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DUSCLOPS] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ROSELIA] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SLAKOTH] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VIGOROTH] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SLAKING] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GULPIN] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SWALOT] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.TROPIUS] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.WHISMUR] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LOUDRED] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.EXPLOUD] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CLAMPERL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.HUNTAIL] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GOREBYSS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ABSOL] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                    , TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.COUNTER)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHUPPET] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BANETTE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SEVIPER] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ZANGOOSE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RELICANTH] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ARON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LAIRON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.AGGRON] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CASTFORM] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.VOLBEAT] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ILLUMISE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LILEEP] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CRADILY] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ANORITH] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.ARMALDO] = [TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RALTS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.DREAM_EATER)
                    , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KIRLIA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GARDEVOIR] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BAGON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                    , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                    , TUTOR(TUTOR_MOVE.MIMIC)
                    , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                    , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SHELGON] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.SALAMENCE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.BELDUM] = []

TutorLearnsets[SPECIES.METANG] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.METAGROSS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.REGIROCK] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.REGICE] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.REGISTEEL] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.EXPLOSION)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.KYOGRE] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.GROUDON] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.SWORDS_DANCE)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.RAYQUAZA] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LATIAS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.LATIOS] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.JIRACHI] = [TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.METRONOME)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.DEOXYS] = [TUTOR(TUTOR_MOVE.MEGA_PUNCH)
                        , TUTOR(TUTOR_MOVE.MEGA_KICK)
                        , TUTOR(TUTOR_MOVE.BODY_SLAM)
                        , TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.COUNTER)
                        , TUTOR(TUTOR_MOVE.SEISMIC_TOSS)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.THUNDER_WAVE)
                        , TUTOR(TUTOR_MOVE.ROCK_SLIDE)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

TutorLearnsets[SPECIES.CHIMECHO] = [TUTOR(TUTOR_MOVE.DOUBLE_EDGE)
                        , TUTOR(TUTOR_MOVE.MIMIC)
                        , TUTOR(TUTOR_MOVE.DREAM_EATER)
                        , TUTOR(TUTOR_MOVE.SUBSTITUTE)]

    