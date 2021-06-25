import { Evolution } from "../IPokemon";
import { SPECIES } from "../data/Species";
import { EVO_METHOD } from "./EvoMethod";
import { ITEM } from "../../item/data/Items"

export const EvolutionTable: Evolution[][] = []

EvolutionTable[SPECIES.BULBASAUR] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.IVYSAUR }
]
EvolutionTable[SPECIES.IVYSAUR] = [
    { method: EVO_METHOD.LEVEL, param: 32, targetSpecies: SPECIES.VENUSAUR }
]
EvolutionTable[SPECIES.CHARMANDER] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.CHARMELEON }
]
EvolutionTable[SPECIES.CHARMELEON] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.CHARIZARD }
]
EvolutionTable[SPECIES.SQUIRTLE] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.WARTORTLE }
]
EvolutionTable[SPECIES.WARTORTLE] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.BLASTOISE }
]
EvolutionTable[SPECIES.CATERPIE] = [
    { method: EVO_METHOD.LEVEL, param: 7, targetSpecies: SPECIES.METAPOD }
]
EvolutionTable[SPECIES.METAPOD] = [
    { method: EVO_METHOD.LEVEL, param: 10, targetSpecies: SPECIES.BUTTERFREE }
]
EvolutionTable[SPECIES.WEEDLE] = [
    { method: EVO_METHOD.LEVEL, param: 7, targetSpecies: SPECIES.KAKUNA }
]
EvolutionTable[SPECIES.KAKUNA] = [
    { method: EVO_METHOD.LEVEL, param: 10, targetSpecies: SPECIES.BEEDRILL }
]
EvolutionTable[SPECIES.PIDGEY] = [
    { method: EVO_METHOD.LEVEL, param: 18, targetSpecies: SPECIES.PIDGEOTTO }
]
EvolutionTable[SPECIES.PIDGEOTTO] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.PIDGEOT }
]
EvolutionTable[SPECIES.RATTATA] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.RATICATE }
]
EvolutionTable[SPECIES.SPEAROW] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.FEAROW }
]
EvolutionTable[SPECIES.EKANS] = [
    { method: EVO_METHOD.LEVEL, param: 22, targetSpecies: SPECIES.ARBOK }
]
EvolutionTable[SPECIES.PIKACHU] = [
    { method: EVO_METHOD.ITEM, param: ITEM.THUNDER_STONE, targetSpecies: SPECIES.RAICHU }
]
EvolutionTable[SPECIES.SANDSHREW] = [
    { method: EVO_METHOD.LEVEL, param: 22, targetSpecies: SPECIES.SANDSLASH }
]
EvolutionTable[SPECIES.NIDORAN_F] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.NIDORINA }
]
EvolutionTable[SPECIES.NIDORINA] = [
    { method: EVO_METHOD.ITEM, param: ITEM.MOON_STONE, targetSpecies: SPECIES.NIDOQUEEN }
]
EvolutionTable[SPECIES.NIDORAN_M] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.NIDORINO }
]
EvolutionTable[SPECIES.NIDORINO] = [
    { method: EVO_METHOD.ITEM, param: ITEM.MOON_STONE, targetSpecies: SPECIES.NIDOKING }
]
EvolutionTable[SPECIES.CLEFAIRY] = [
    { method: EVO_METHOD.ITEM, param: ITEM.MOON_STONE, targetSpecies: SPECIES.CLEFABLE }
]
EvolutionTable[SPECIES.VULPIX] = [
    { method: EVO_METHOD.ITEM, param: ITEM.FIRE_STONE, targetSpecies: SPECIES.NINETALES }
]
EvolutionTable[SPECIES.JIGGLYPUFF] = [
    { method: EVO_METHOD.ITEM, param: ITEM.MOON_STONE, targetSpecies: SPECIES.WIGGLYTUFF }
]
EvolutionTable[SPECIES.ZUBAT] = [
    { method: EVO_METHOD.LEVEL, param: 22, targetSpecies: SPECIES.GOLBAT }
]
EvolutionTable[SPECIES.GOLBAT] = [
    { method: EVO_METHOD.FRIENDSHIP, param: 0, targetSpecies: SPECIES.CROBAT }
]
EvolutionTable[SPECIES.ODDISH] = [
    { method: EVO_METHOD.LEVEL, param: 21, targetSpecies: SPECIES.GLOOM }
]
EvolutionTable[SPECIES.GLOOM] = [
    { method: EVO_METHOD.ITEM, param: ITEM.LEAF_STONE, targetSpecies: SPECIES.VILEPLUME },
    { method: EVO_METHOD.ITEM, param: ITEM.SUN_STONE, targetSpecies: SPECIES.BELLOSSOM }
]
EvolutionTable[SPECIES.PARAS] = [
    { method: EVO_METHOD.LEVEL, param: 24, targetSpecies: SPECIES.PARASECT }
]
EvolutionTable[SPECIES.VENONAT] = [
    { method: EVO_METHOD.LEVEL, param: 31, targetSpecies: SPECIES.VENOMOTH }
]
EvolutionTable[SPECIES.DIGLETT] = [
    { method: EVO_METHOD.LEVEL, param: 26, targetSpecies: SPECIES.DUGTRIO }
]
EvolutionTable[SPECIES.MEOWTH] = [
    { method: EVO_METHOD.LEVEL, param: 28, targetSpecies: SPECIES.PERSIAN }
]
EvolutionTable[SPECIES.PSYDUCK] = [
    { method: EVO_METHOD.LEVEL, param: 33, targetSpecies: SPECIES.GOLDUCK }
]
EvolutionTable[SPECIES.MANKEY] = [
    { method: EVO_METHOD.LEVEL, param: 28, targetSpecies: SPECIES.PRIMEAPE }
]
EvolutionTable[SPECIES.GROWLITHE] = [
    { method: EVO_METHOD.ITEM, param: ITEM.FIRE_STONE, targetSpecies: SPECIES.ARCANINE }
]
EvolutionTable[SPECIES.POLIWAG] = [
    { method: EVO_METHOD.LEVEL, param: 25, targetSpecies: SPECIES.POLIWHIRL }
]
EvolutionTable[SPECIES.POLIWHIRL] = [
    { method: EVO_METHOD.ITEM, param: ITEM.WATER_STONE, targetSpecies: SPECIES.POLIWRATH },
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.KINGS_ROCK, targetSpecies: SPECIES.POLITOED }
]
EvolutionTable[SPECIES.ABRA] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.KADABRA }
]
EvolutionTable[SPECIES.KADABRA] = [
    { method: EVO_METHOD.TRADE, param: 0, targetSpecies: SPECIES.ALAKAZAM }
]
EvolutionTable[SPECIES.MACHOP] = [
    { method: EVO_METHOD.LEVEL, param: 28, targetSpecies: SPECIES.MACHOKE }
]
EvolutionTable[SPECIES.MACHOKE] = [
    { method: EVO_METHOD.TRADE, param: 0, targetSpecies: SPECIES.MACHAMP }
]
EvolutionTable[SPECIES.BELLSPROUT] = [
    { method: EVO_METHOD.LEVEL, param: 21, targetSpecies: SPECIES.WEEPINBELL }
]
EvolutionTable[SPECIES.WEEPINBELL] = [
    { method: EVO_METHOD.ITEM, param: ITEM.LEAF_STONE, targetSpecies: SPECIES.VICTREEBEL }
]
EvolutionTable[SPECIES.TENTACOOL] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.TENTACRUEL }
]
EvolutionTable[SPECIES.GEODUDE] = [
    { method: EVO_METHOD.LEVEL, param: 25, targetSpecies: SPECIES.GRAVELER }
]
EvolutionTable[SPECIES.GRAVELER] = [
    { method: EVO_METHOD.TRADE, param: 0, targetSpecies: SPECIES.GOLEM }
]
EvolutionTable[SPECIES.PONYTA] = [
    { method: EVO_METHOD.LEVEL, param: 40, targetSpecies: SPECIES.RAPIDASH }
]
EvolutionTable[SPECIES.SLOWPOKE] = [
    { method: EVO_METHOD.LEVEL, param: 37, targetSpecies: SPECIES.SLOWBRO },
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.KINGS_ROCK, targetSpecies: SPECIES.SLOWKING }
]
EvolutionTable[SPECIES.MAGNEMITE] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.MAGNETON }
]
EvolutionTable[SPECIES.DODUO] = [
    { method: EVO_METHOD.LEVEL, param: 31, targetSpecies: SPECIES.DODRIO }
]
EvolutionTable[SPECIES.SEEL] = [
    { method: EVO_METHOD.LEVEL, param: 34, targetSpecies: SPECIES.DEWGONG }
]
EvolutionTable[SPECIES.GRIMER] = [
    { method: EVO_METHOD.LEVEL, param: 38, targetSpecies: SPECIES.MUK }
]
EvolutionTable[SPECIES.SHELLDER] = [
    { method: EVO_METHOD.ITEM, param: ITEM.WATER_STONE, targetSpecies: SPECIES.CLOYSTER }
]
EvolutionTable[SPECIES.GASTLY] = [
    { method: EVO_METHOD.LEVEL, param: 25, targetSpecies: SPECIES.HAUNTER }
]
EvolutionTable[SPECIES.HAUNTER] = [
    { method: EVO_METHOD.TRADE, param: 0, targetSpecies: SPECIES.GENGAR }
]
EvolutionTable[SPECIES.ONIX] = [
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.METAL_COAT, targetSpecies: SPECIES.STEELIX }
]
EvolutionTable[SPECIES.DROWZEE] = [
    { method: EVO_METHOD.LEVEL, param: 26, targetSpecies: SPECIES.HYPNO }
]
EvolutionTable[SPECIES.KRABBY] = [
    { method: EVO_METHOD.LEVEL, param: 28, targetSpecies: SPECIES.KINGLER }
]
EvolutionTable[SPECIES.VOLTORB] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.ELECTRODE }
]
EvolutionTable[SPECIES.EXEGGCUTE] = [
    { method: EVO_METHOD.ITEM, param: ITEM.LEAF_STONE, targetSpecies: SPECIES.EXEGGUTOR }
]
EvolutionTable[SPECIES.CUBONE] = [
    { method: EVO_METHOD.LEVEL, param: 28, targetSpecies: SPECIES.MAROWAK }
]
EvolutionTable[SPECIES.KOFFING] = [
    { method: EVO_METHOD.LEVEL, param: 35, targetSpecies: SPECIES.WEEZING }
]
EvolutionTable[SPECIES.RHYHORN] = [
    { method: EVO_METHOD.LEVEL, param: 42, targetSpecies: SPECIES.RHYDON }
]
EvolutionTable[SPECIES.CHANSEY] = [
    { method: EVO_METHOD.FRIENDSHIP, param: 0, targetSpecies: SPECIES.BLISSEY }
]
EvolutionTable[SPECIES.HORSEA] = [
    { method: EVO_METHOD.LEVEL, param: 32, targetSpecies: SPECIES.SEADRA }
]
EvolutionTable[SPECIES.SEADRA] = [
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.DRAGON_SCALE, targetSpecies: SPECIES.KINGDRA }
]
EvolutionTable[SPECIES.GOLDEEN] = [
    { method: EVO_METHOD.LEVEL, param: 33, targetSpecies: SPECIES.SEAKING }
]
EvolutionTable[SPECIES.STARYU] = [
    { method: EVO_METHOD.ITEM, param: ITEM.WATER_STONE, targetSpecies: SPECIES.STARMIE }
]
EvolutionTable[SPECIES.SCYTHER] = [
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.METAL_COAT, targetSpecies: SPECIES.SCIZOR }
]
EvolutionTable[SPECIES.MAGIKARP] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.GYARADOS }
]
EvolutionTable[SPECIES.EEVEE] = [
    { method: EVO_METHOD.ITEM, param: ITEM.THUNDER_STONE, targetSpecies: SPECIES.JOLTEON },
    { method: EVO_METHOD.ITEM, param: ITEM.WATER_STONE, targetSpecies: SPECIES.VAPOREON },
    { method: EVO_METHOD.ITEM, param: ITEM.FIRE_STONE, targetSpecies: SPECIES.FLAREON },
    { method: EVO_METHOD.FRIENDSHIP_DAY, param: 0, targetSpecies: SPECIES.ESPEON },
    { method: EVO_METHOD.FRIENDSHIP_NIGHT, param: 0, targetSpecies: SPECIES.UMBREON }
]
EvolutionTable[SPECIES.PORYGON] = [
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.UP_GRADE, targetSpecies: SPECIES.PORYGON2 }
]
EvolutionTable[SPECIES.OMANYTE] = [
    { method: EVO_METHOD.LEVEL, param: 40, targetSpecies: SPECIES.OMASTAR }
]
EvolutionTable[SPECIES.KABUTO] = [
    { method: EVO_METHOD.LEVEL, param: 40, targetSpecies: SPECIES.KABUTOPS }
]
EvolutionTable[SPECIES.DRATINI] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.DRAGONAIR }
]
EvolutionTable[SPECIES.DRAGONAIR] = [
    { method: EVO_METHOD.LEVEL, param: 55, targetSpecies: SPECIES.DRAGONITE }
]
EvolutionTable[SPECIES.CHIKORITA] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.BAYLEEF }
]
EvolutionTable[SPECIES.BAYLEEF] = [
    { method: EVO_METHOD.LEVEL, param: 32, targetSpecies: SPECIES.MEGANIUM }
]
EvolutionTable[SPECIES.CYNDAQUIL] = [
    { method: EVO_METHOD.LEVEL, param: 14, targetSpecies: SPECIES.QUILAVA }
]
EvolutionTable[SPECIES.QUILAVA] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.TYPHLOSION }
]
EvolutionTable[SPECIES.TOTODILE] = [
    { method: EVO_METHOD.LEVEL, param: 18, targetSpecies: SPECIES.CROCONAW }
]
EvolutionTable[SPECIES.CROCONAW] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.FERALIGATR }
]
EvolutionTable[SPECIES.SENTRET] = [
    { method: EVO_METHOD.LEVEL, param: 15, targetSpecies: SPECIES.FURRET }
]
EvolutionTable[SPECIES.HOOTHOOT] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.NOCTOWL }
]
EvolutionTable[SPECIES.LEDYBA] = [
    { method: EVO_METHOD.LEVEL, param: 18, targetSpecies: SPECIES.LEDIAN }
]
EvolutionTable[SPECIES.SPINARAK] = [
    { method: EVO_METHOD.LEVEL, param: 22, targetSpecies: SPECIES.ARIADOS }
]
EvolutionTable[SPECIES.CHINCHOU] = [
    { method: EVO_METHOD.LEVEL, param: 27, targetSpecies: SPECIES.LANTURN }
]
EvolutionTable[SPECIES.PICHU] = [
    { method: EVO_METHOD.FRIENDSHIP, param: 0, targetSpecies: SPECIES.PIKACHU }
]
EvolutionTable[SPECIES.CLEFFA] = [
    { method: EVO_METHOD.FRIENDSHIP, param: 0, targetSpecies: SPECIES.CLEFAIRY }
]
EvolutionTable[SPECIES.IGGLYBUFF] = [
    { method: EVO_METHOD.FRIENDSHIP, param: 0, targetSpecies: SPECIES.JIGGLYPUFF }
]
EvolutionTable[SPECIES.TOGEPI] = [
    { method: EVO_METHOD.FRIENDSHIP, param: 0, targetSpecies: SPECIES.TOGETIC }
]
EvolutionTable[SPECIES.NATU] = [
    { method: EVO_METHOD.LEVEL, param: 25, targetSpecies: SPECIES.XATU }
]
EvolutionTable[SPECIES.MAREEP] = [
    { method: EVO_METHOD.LEVEL, param: 15, targetSpecies: SPECIES.FLAAFFY }
]
EvolutionTable[SPECIES.FLAAFFY] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.AMPHAROS }
]
EvolutionTable[SPECIES.MARILL] = [
    { method: EVO_METHOD.LEVEL, param: 18, targetSpecies: SPECIES.AZUMARILL }
]
EvolutionTable[SPECIES.HOPPIP] = [
    { method: EVO_METHOD.LEVEL, param: 18, targetSpecies: SPECIES.SKIPLOOM }
]
EvolutionTable[SPECIES.SKIPLOOM] = [
    { method: EVO_METHOD.LEVEL, param: 27, targetSpecies: SPECIES.JUMPLUFF }
]
EvolutionTable[SPECIES.SUNKERN] = [
    { method: EVO_METHOD.ITEM, param: ITEM.SUN_STONE, targetSpecies: SPECIES.SUNFLORA }
]
EvolutionTable[SPECIES.WOOPER] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.QUAGSIRE }
]
EvolutionTable[SPECIES.PINECO] = [
    { method: EVO_METHOD.LEVEL, param: 31, targetSpecies: SPECIES.FORRETRESS }
]
EvolutionTable[SPECIES.SNUBBULL] = [
    { method: EVO_METHOD.LEVEL, param: 23, targetSpecies: SPECIES.GRANBULL }
]
EvolutionTable[SPECIES.TEDDIURSA] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.URSARING }
]
EvolutionTable[SPECIES.SLUGMA] = [
    { method: EVO_METHOD.LEVEL, param: 38, targetSpecies: SPECIES.MAGCARGO }
]
EvolutionTable[SPECIES.SWINUB] = [
    { method: EVO_METHOD.LEVEL, param: 33, targetSpecies: SPECIES.PILOSWINE }
]
EvolutionTable[SPECIES.REMORAID] = [
    { method: EVO_METHOD.LEVEL, param: 25, targetSpecies: SPECIES.OCTILLERY }
]
EvolutionTable[SPECIES.HOUNDOUR] = [
    { method: EVO_METHOD.LEVEL, param: 24, targetSpecies: SPECIES.HOUNDOOM }
]
EvolutionTable[SPECIES.PHANPY] = [
    { method: EVO_METHOD.LEVEL, param: 25, targetSpecies: SPECIES.DONPHAN }
]
EvolutionTable[SPECIES.TYROGUE] = [
    { method: EVO_METHOD.LEVEL_ATK_LT_DEF, param: 20, targetSpecies: SPECIES.HITMONCHAN },
    { method: EVO_METHOD.LEVEL_ATK_GT_DEF, param: 20, targetSpecies: SPECIES.HITMONLEE },
    { method: EVO_METHOD.LEVEL_ATK_EQ_DEF, param: 20, targetSpecies: SPECIES.HITMONTOP }
]
EvolutionTable[SPECIES.SMOOCHUM] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.JYNX }
]
EvolutionTable[SPECIES.ELEKID] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.ELECTABUZZ }
]
EvolutionTable[SPECIES.MAGBY] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.MAGMAR }
]
EvolutionTable[SPECIES.LARVITAR] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.PUPITAR }
]
EvolutionTable[SPECIES.PUPITAR] = [
    { method: EVO_METHOD.LEVEL, param: 55, targetSpecies: SPECIES.TYRANITAR }
]
EvolutionTable[SPECIES.TREECKO] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.GROVYLE }
]
EvolutionTable[SPECIES.GROVYLE] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.SCEPTILE }
]
EvolutionTable[SPECIES.TORCHIC] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.COMBUSKEN }
]
EvolutionTable[SPECIES.COMBUSKEN] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.BLAZIKEN }
]
EvolutionTable[SPECIES.MUDKIP] = [
    { method: EVO_METHOD.LEVEL, param: 16, targetSpecies: SPECIES.MARSHTOMP }
]
EvolutionTable[SPECIES.MARSHTOMP] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.SWAMPERT }
]
EvolutionTable[SPECIES.POOCHYENA] = [
    { method: EVO_METHOD.LEVEL, param: 18, targetSpecies: SPECIES.MIGHTYENA }
]
EvolutionTable[SPECIES.ZIGZAGOON] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.LINOONE }
]
EvolutionTable[SPECIES.WURMPLE] = [
    { method: EVO_METHOD.LEVEL_SILCOON, param: 7, targetSpecies: SPECIES.SILCOON },
    { method: EVO_METHOD.LEVEL_CASCOON, param: 7, targetSpecies: SPECIES.CASCOON }
]
EvolutionTable[SPECIES.SILCOON] = [
    { method: EVO_METHOD.LEVEL, param: 10, targetSpecies: SPECIES.BEAUTIFLY }
]
EvolutionTable[SPECIES.CASCOON] = [
    { method: EVO_METHOD.LEVEL, param: 10, targetSpecies: SPECIES.DUSTOX }
]
EvolutionTable[SPECIES.LOTAD] = [
    { method: EVO_METHOD.LEVEL, param: 14, targetSpecies: SPECIES.LOMBRE }
]
EvolutionTable[SPECIES.LOMBRE] = [
    { method: EVO_METHOD.ITEM, param: ITEM.WATER_STONE, targetSpecies: SPECIES.LUDICOLO }
]
EvolutionTable[SPECIES.SEEDOT] = [
    { method: EVO_METHOD.LEVEL, param: 14, targetSpecies: SPECIES.NUZLEAF }
]
EvolutionTable[SPECIES.NUZLEAF] = [
    { method: EVO_METHOD.ITEM, param: ITEM.LEAF_STONE, targetSpecies: SPECIES.SHIFTRY }
]
EvolutionTable[SPECIES.NINCADA] = [
    { method: EVO_METHOD.LEVEL_NINJASK, param: 20, targetSpecies: SPECIES.NINJASK },
    { method: EVO_METHOD.LEVEL_SHEDINJA, param: 20, targetSpecies: SPECIES.SHEDINJA }
]
EvolutionTable[SPECIES.TAILLOW] = [
    { method: EVO_METHOD.LEVEL, param: 22, targetSpecies: SPECIES.SWELLOW }
]
EvolutionTable[SPECIES.SHROOMISH] = [
    { method: EVO_METHOD.LEVEL, param: 23, targetSpecies: SPECIES.BRELOOM }
]
EvolutionTable[SPECIES.WINGULL] = [
    { method: EVO_METHOD.LEVEL, param: 25, targetSpecies: SPECIES.PELIPPER }
]
EvolutionTable[SPECIES.SURSKIT] = [
    { method: EVO_METHOD.LEVEL, param: 22, targetSpecies: SPECIES.MASQUERAIN }
]
EvolutionTable[SPECIES.WAILMER] = [
    { method: EVO_METHOD.LEVEL, param: 40, targetSpecies: SPECIES.WAILORD }
]
EvolutionTable[SPECIES.SKITTY] = [
    { method: EVO_METHOD.ITEM, param: ITEM.MOON_STONE, targetSpecies: SPECIES.DELCATTY }
]
EvolutionTable[SPECIES.BALTOY] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.CLAYDOL }
]
EvolutionTable[SPECIES.BARBOACH] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.WHISCASH }
]
EvolutionTable[SPECIES.CORPHISH] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.CRAWDAUNT }
]
EvolutionTable[SPECIES.FEEBAS] = [
    { method: EVO_METHOD.BEAUTY, param: 170, targetSpecies: SPECIES.MILOTIC }
]
EvolutionTable[SPECIES.CARVANHA] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.SHARPEDO }
]
EvolutionTable[SPECIES.TRAPINCH] = [
    { method: EVO_METHOD.LEVEL, param: 35, targetSpecies: SPECIES.VIBRAVA }
]
EvolutionTable[SPECIES.VIBRAVA] = [
    { method: EVO_METHOD.LEVEL, param: 45, targetSpecies: SPECIES.FLYGON }
]
EvolutionTable[SPECIES.MAKUHITA] = [
    { method: EVO_METHOD.LEVEL, param: 24, targetSpecies: SPECIES.HARIYAMA }
]
EvolutionTable[SPECIES.ELECTRIKE] = [
    { method: EVO_METHOD.LEVEL, param: 26, targetSpecies: SPECIES.MANECTRIC }
]
EvolutionTable[SPECIES.NUMEL] = [
    { method: EVO_METHOD.LEVEL, param: 33, targetSpecies: SPECIES.CAMERUPT }
]
EvolutionTable[SPECIES.SPHEAL] = [
    { method: EVO_METHOD.LEVEL, param: 32, targetSpecies: SPECIES.SEALEO }
]
EvolutionTable[SPECIES.SEALEO] = [
    { method: EVO_METHOD.LEVEL, param: 44, targetSpecies: SPECIES.WALREIN }
]
EvolutionTable[SPECIES.CACNEA] = [
    { method: EVO_METHOD.LEVEL, param: 32, targetSpecies: SPECIES.CACTURNE }
]
EvolutionTable[SPECIES.SNORUNT] = [
    { method: EVO_METHOD.LEVEL, param: 42, targetSpecies: SPECIES.GLALIE }
]
EvolutionTable[SPECIES.AZURILL] = [
    { method: EVO_METHOD.FRIENDSHIP, param: 0, targetSpecies: SPECIES.MARILL }
]
EvolutionTable[SPECIES.SPOINK] = [
    { method: EVO_METHOD.LEVEL, param: 32, targetSpecies: SPECIES.GRUMPIG }
]
EvolutionTable[SPECIES.MEDITITE] = [
    { method: EVO_METHOD.LEVEL, param: 37, targetSpecies: SPECIES.MEDICHAM }
]
EvolutionTable[SPECIES.SWABLU] = [
    { method: EVO_METHOD.LEVEL, param: 35, targetSpecies: SPECIES.ALTARIA }
]
EvolutionTable[SPECIES.WYNAUT] = [
    { method: EVO_METHOD.LEVEL, param: 15, targetSpecies: SPECIES.WOBBUFFET }
]
EvolutionTable[SPECIES.DUSKULL] = [
    { method: EVO_METHOD.LEVEL, param: 37, targetSpecies: SPECIES.DUSCLOPS }
]
EvolutionTable[SPECIES.SLAKOTH] = [
    { method: EVO_METHOD.LEVEL, param: 18, targetSpecies: SPECIES.VIGOROTH }
]
EvolutionTable[SPECIES.VIGOROTH] = [
    { method: EVO_METHOD.LEVEL, param: 36, targetSpecies: SPECIES.SLAKING }
]
EvolutionTable[SPECIES.GULPIN] = [
    { method: EVO_METHOD.LEVEL, param: 26, targetSpecies: SPECIES.SWALOT }
]
EvolutionTable[SPECIES.WHISMUR] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.LOUDRED }
]
EvolutionTable[SPECIES.LOUDRED] = [
    { method: EVO_METHOD.LEVEL, param: 40, targetSpecies: SPECIES.EXPLOUD }
]
EvolutionTable[SPECIES.CLAMPERL] = [
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.DEEP_SEA_TOOTH, targetSpecies: SPECIES.HUNTAIL },
    { method: EVO_METHOD.TRADE_ITEM, param: ITEM.DEEP_SEA_SCALE, targetSpecies: SPECIES.GOREBYSS }
]
EvolutionTable[SPECIES.SHUPPET] = [
    { method: EVO_METHOD.LEVEL, param: 37, targetSpecies: SPECIES.BANETTE }
]
EvolutionTable[SPECIES.ARON] = [
    { method: EVO_METHOD.LEVEL, param: 32, targetSpecies: SPECIES.LAIRON }
]
EvolutionTable[SPECIES.LAIRON] = [
    { method: EVO_METHOD.LEVEL, param: 42, targetSpecies: SPECIES.AGGRON }
]
EvolutionTable[SPECIES.LILEEP] = [
    { method: EVO_METHOD.LEVEL, param: 40, targetSpecies: SPECIES.CRADILY }
]
EvolutionTable[SPECIES.ANORITH] = [
    { method: EVO_METHOD.LEVEL, param: 40, targetSpecies: SPECIES.ARMALDO }
]
EvolutionTable[SPECIES.RALTS] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.KIRLIA }
]
EvolutionTable[SPECIES.KIRLIA] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.GARDEVOIR }
]
EvolutionTable[SPECIES.BAGON] = [
    { method: EVO_METHOD.LEVEL, param: 30, targetSpecies: SPECIES.SHELGON }
]
EvolutionTable[SPECIES.SHELGON] = [
    { method: EVO_METHOD.LEVEL, param: 50, targetSpecies: SPECIES.SALAMENCE }
]
EvolutionTable[SPECIES.BELDUM] = [
    { method: EVO_METHOD.LEVEL, param: 20, targetSpecies: SPECIES.METANG }
]
EvolutionTable[SPECIES.METANG] = [
    { method: EVO_METHOD.LEVEL, param: 45, targetSpecies: SPECIES.METAGROSS }
]