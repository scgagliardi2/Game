import { FIRST_BERRY_INDEX, ITEM_ENIGMA_BERRY, ITEM_TO_BERRY } from "../data/ItemData";
import { SaveBlock1Ptr } from "../Global";
import { SpriteFrameImage } from "../../new-code/sprite/Sprite";
import { BerryTree, EnigmaBerry } from "./GlobalBerry";

export const BerryDescriptionPart1_Cheri: string = "とても かわいい はなが さく.";
export const BerryDescriptionPart2_Cheri: string = "まっかな みは とても からい.";
export const BerryDescriptionPart1_Chesto: string = "そとの かわの ぶぶんも なかみも すべてが";
export const BerryDescriptionPart2_Chesto: string = "かたい. どこを たべても しぶい.";
export const BerryDescriptionPart1_Pecha: string = "とても あまくて おいしい.";
export const BerryDescriptionPart2_Pecha: string = "やわらかいので はこぶときは ちゅうい.";
export const BerryDescriptionPart1_Rawst: string = "はっぱの ぶぶんが ながく まるまっていると";
export const BerryDescriptionPart2_Rawst: string = "みが とても にがく なるらしい.";
export const BerryDescriptionPart1_Aspear: string = "かたい みの なかには すいぶんが とても";
export const BerryDescriptionPart2_Aspear: string = "おおく ふくまれている. かなり すっぱい.";
export const BerryDescriptionPart1_Leppa: string = "クラボなどに くらべて すこし そだつのが";
export const BerryDescriptionPart2_Leppa: string = "おそい. みが ちいさいほど おいしい.";
export const BerryDescriptionPart1_Oran: string = "いろいろな あじが まざった ふしぎな み.";
export const BerryDescriptionPart2_Oran: string = "みを つけるのに はんにち かかる.";
export const BerryDescriptionPart1_Persim: string = "たいようが だいすき. ひに あたると";
export const BerryDescriptionPart2_Persim: string = "どんどん いろが あざやかに なる.";
export const BerryDescriptionPart1_Lum: string = "そだつのに じかんが かかるが たいせつに";
export const BerryDescriptionPart2_Lum: string = "そだてると みが 2つ つくことも ある.";
export const BerryDescriptionPart1_Sitrus: string = "オレンとは きょうだいの ような そんざい.";
export const BerryDescriptionPart2_Sitrus: string = "おおきくて あじも ととのっている.";
export const BerryDescriptionPart1_Figy: string = "たべられた あとのような かたちの なかには";
export const BerryDescriptionPart2_Figy: string = "からい せいぶんが つまっている.";
export const BerryDescriptionPart1_Wiki: string = "まわりに ついている イボイボは ポケモンが";
export const BerryDescriptionPart2_Wiki: string = "もちやすいように できたと いわれている.";
export const BerryDescriptionPart1_Mago: string = "おおきく なれば なるほど みが まがる.";
export const BerryDescriptionPart2_Mago: string = "まがるほど あまくて おいしい.";
export const BerryDescriptionPart1_Aguav: string = "ちいさい サイズの はなで しかも ひかりを";
export const BerryDescriptionPart2_Aguav: string = "ひつようと しない めずらしい きのみ.";
export const BerryDescriptionPart1_Iapapa: string = "とても おおきな すっぱい きのみ.";
export const BerryDescriptionPart2_Iapapa: string = "そだてるには みじかくても 1にち かかる.";
export const BerryDescriptionPart1_Razz: string = "あかい みは たべると ちょっぴり からい.";
export const BerryDescriptionPart2_Razz: string = "そだつのが はやく 4じかんで みを つける";
export const BerryDescriptionPart1_Bluk: string = "そとがわは あおいいろだが たべると";
export const BerryDescriptionPart2_Bluk: string = "くちの なかが まっくろに なる.";
export const BerryDescriptionPart1_Nanab: string = "せかいで 7ばんめに はっけん されたので";
export const BerryDescriptionPart2_Nanab: string = "ナナという せつが ゆうりょく. あまい.";
export const BerryDescriptionPart1_Wepear: string = "ちいさな しろい はなが さく. にがさと";
export const BerryDescriptionPart2_Wepear: string = "すっぱさが まざりあった びみょうな あじ.";
export const BerryDescriptionPart1_Pinap: string = "かぜに よわく さむさにも よわい.";
export const BerryDescriptionPart2_Pinap: string = "みの なかが からく そとがわが すっぱい.";
export const BerryDescriptionPart1_Pomeg: string = "どんなに みずを あげても えいようが";
export const BerryDescriptionPart2_Pomeg: string = "あっても 6つの み しか つけない.";
export const BerryDescriptionPart1_Kelpsy: string = "ねっこの ような かたちの めずらしい";
export const BerryDescriptionPart2_Kelpsy: string = "しゅるい. とても おおきな はなが さく.";
export const BerryDescriptionPart1_Qualot: string = "みずが だいすき. ずっと あめが ふる";
export const BerryDescriptionPart2_Qualot: string = "ばしょでも しっかりと そだつ.";
export const BerryDescriptionPart1_Hondew: string = "とても こうかで なかなか めに することが";
export const BerryDescriptionPart2_Hondew: string = "できない きのみ. とても おいしい.";
export const BerryDescriptionPart1_Grepa: string = "やわらかさと まるい かたちからは";
export const BerryDescriptionPart2_Grepa: string = "そうぞうが できないほど すっぱい.";
export const BerryDescriptionPart1_Tamato: string = "くちびるが まがって しまうほど からい.";
export const BerryDescriptionPart2_Tamato: string = "そだてるにも じかんが かかる.";
export const BerryDescriptionPart1_Cornn: string = "おおむかしから はえていた. たくさん";
export const BerryDescriptionPart2_Cornn: string = "うえないと みが つかないときも ある.";
export const BerryDescriptionPart1_Magost: string = "とても あじの バランスが よいと";
export const BerryDescriptionPart2_Magost: string = "ひょうばんの きのみ.";
export const BerryDescriptionPart1_Rabuta: string = "たくさんの けが はえている めずらしい";
export const BerryDescriptionPart2_Rabuta: string = "しゅるい. かなり にがい.";
export const BerryDescriptionPart1_Nomel: string = "かなり すっぱい. 1くち たべると";
export const BerryDescriptionPart2_Nomel: string = "3にちかん ほかの あじが しなくなる.";
export const BerryDescriptionPart1_Spelon: string = "まっかになった みは とてつもなく からい.";
export const BerryDescriptionPart2_Spelon: string = "イボからも からい せいぶんが でている.";
export const BerryDescriptionPart1_Pamtre: string = "どこからともなく うみを ただよってくる.";
export const BerryDescriptionPart2_Pamtre: string = "せかいの どこかで そだっている らしい.";
export const BerryDescriptionPart1_Watmel: string = "とても おおきく 50センチを こえるものも";
export const BerryDescriptionPart2_Watmel: string = "はっけん された. ものすごく あまい.";
export const BerryDescriptionPart1_Durin: string = "みただけで にがい. あまりにも にがいので";
export const BerryDescriptionPart2_Durin: string = "そのままで たべたひとは だれもいない.";
export const BerryDescriptionPart1_Belue: string = "つるつるとして おいしそうだが とてつもなく";
export const BerryDescriptionPart2_Belue: string = "すっぱい. そだてるにも じかんが かかる.";
export const BerryDescriptionPart1_Liechi: string = "なぞのタネ. チイラのみには うみの";
export const BerryDescriptionPart2_Liechi: string = "ちからが やどるという うわさが ある.";
export const BerryDescriptionPart1_Ganlon: string = "なぞのタネ. リュガのみには りくの";
export const BerryDescriptionPart2_Ganlon: string = "ちからが やどるという うわさが ある.";
export const BerryDescriptionPart1_Salac: string = "なぞのタネ. カムラのみには そらの";
export const BerryDescriptionPart2_Salac: string = "ちからが やどるという うわさが ある.";
export const BerryDescriptionPart1_Petaya: string = "なぞのタネ. ヤタピのみには すべての";
export const BerryDescriptionPart2_Petaya: string = "いきものの ちからが やどると いわれている";
export const BerryDescriptionPart1_Apicot: string = "ふしぎな ふしぎな きのみ. なにが";
export const BerryDescriptionPart2_Apicot: string = "おこるのか なにが できるのか わからない.";
export const BerryDescriptionPart1_Lansat: string = "でんせつのみ と いわれている. この みを";
export const BerryDescriptionPart2_Lansat: string = "もつと とても しあわせに なるらしい.";
export const BerryDescriptionPart1_Starf: string = "あまりにも ちからが つよすぎるため";
export const BerryDescriptionPart2_Starf: string = "せかいの はてに すてた まぼろしのみ.";
export const BerryDescriptionPart1_Enigma: string = "しょうたい ふめいの きのみ.";
export const BerryDescriptionPart2_Enigma: string = "ほしの ちからを もっている らしい.";

export const NUM_BERRIES = 44

export let BerryTreeObjectEventGraphicsIdTable: any[] = []
export let BerryTreePicTable: SpriteFrameImage[] = []
export let BerryTreePaletteSlotTable: any[] = []

// Leftover from R/S
// export let BlankBerryTree: BerryTree = {}

export enum BERRY_FIRMNESS
{
    UNKNOWN,
    VERY_SOFT,
    SOFT,
    HARD,
    VERY_HARD,
    SUPER_HARD,
}

export enum BERRY_FLAVOR
{
    SPICY,
    DRY,
    SWEET,
    BITTER,
    SOUR,
    COUNT
}

export interface Berry {
    name: string,
    firmness: BERRY_FIRMNESS,
    size: number,
    maxYield: number,
    minYield: number,
    description1: string,
    description2: string,
    stageDuration: number,
    spicy: number,
    dry: number,
    sweet: number,
    bitter: number,
    sour: number,
    smoothness: number
}

export interface BerryCrushStats {
    difficulty: number,
    powder: number
}

export let Berries: Berry[] = [
    {
        name: "CHERI",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 20,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Cheri,
        description2: BerryDescriptionPart2_Cheri,
        stageDuration: 3,
        spicy: 10,
        dry: 0,
        sweet: 0,
        bitter: 0,
        sour: 0,
        smoothness: 25
    },
    {
        name: "CHESTO",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 80,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Chesto,
        description2: BerryDescriptionPart2_Chesto,
        stageDuration: 3,
        spicy: 0,
        dry: 10,
        sweet: 0,
        bitter: 0,
        sour: 0,
        smoothness: 25
    },
    {
        name: "PECHA",
        firmness: BERRY_FIRMNESS.VERY_SOFT,
        size: 40,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Pecha,
        description2: BerryDescriptionPart2_Pecha,
        stageDuration: 3,
        spicy: 0,
        dry: 0,
        sweet: 10,
        bitter: 0,
        sour: 0,
        smoothness: 25
    },
    {
        name: "RAWST",
        firmness: BERRY_FIRMNESS.HARD,
        size: 32,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Rawst,
        description2: BerryDescriptionPart2_Rawst,
        stageDuration: 3,
        spicy: 0,
        dry: 0,
        sweet: 0,
        bitter: 10,
        sour: 0,
        smoothness: 25
    },
    {
        name: "ASPEAR",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 50,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Aspear,
        description2: BerryDescriptionPart2_Aspear,
        stageDuration: 3,
        spicy: 0,
        dry: 0,
        sweet: 0,
        bitter: 0,
        sour: 10,
        smoothness: 25
    },
    {
        name: "LEPPA",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 28,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Leppa,
        description2: BerryDescriptionPart2_Leppa,
        stageDuration: 4,
        spicy: 10,
        dry: 0,
        sweet: 10,
        bitter: 10,
        sour: 10,
        smoothness: 20
    },
    {
        name: "ORAN",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 35,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Oran,
        description2: BerryDescriptionPart2_Oran,
        stageDuration: 3,
        spicy: 10,
        dry: 10,
        sweet: 10,
        bitter: 10,
        sour: 10,
        smoothness: 20
    },
    {
        name: "PERSIM",
        firmness: BERRY_FIRMNESS.HARD,
        size: 47,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Persim,
        description2: BerryDescriptionPart2_Persim,
        stageDuration: 3,
        spicy: 10,
        dry: 10,
        sweet: 10,
        bitter: 10,
        sour: 10,
        smoothness: 20
    },
    {
        name: "LUM",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 34,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Lum,
        description2: BerryDescriptionPart2_Lum,
        stageDuration: 12,
        spicy: 10,
        dry: 10,
        sweet: 10,
        bitter: 10,
        sour: 10,
        smoothness: 20
    },
    {
        name: "SITRUS",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 95,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Sitrus,
        description2: BerryDescriptionPart2_Sitrus,
        stageDuration: 6,
        spicy: 10,
        dry: 10,
        sweet: 10,
        bitter: 10,
        sour: 10,
        smoothness: 20
    },
    {
        name: "FIGY",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 100,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Figy,
        description2: BerryDescriptionPart2_Figy,
        stageDuration: 6,
        spicy: 10,
        dry: 0,
        sweet: 0,
        bitter: 0,
        sour: 0,
        smoothness: 25
    },
    {
        name: "WIKI",
        firmness: BERRY_FIRMNESS.HARD,
        size: 115,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Wiki,
        description2: BerryDescriptionPart2_Wiki,
        stageDuration: 6,
        spicy: 0,
        dry: 10,
        sweet: 0,
        bitter: 0,
        sour: 0,
        smoothness: 25
    },
    {
        name: "MAGO",
        firmness: BERRY_FIRMNESS.HARD,
        size: 126,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Mago,
        description2: BerryDescriptionPart2_Mago,
        stageDuration: 6,
        spicy: 0,
        dry: 0,
        sweet: 10,
        bitter: 0,
        sour: 0,
        smoothness: 25
    },
    {
        name: "AGUAV",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 64,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Aguav,
        description2: BerryDescriptionPart2_Aguav,
        stageDuration: 6,
        spicy: 0,
        dry: 0,
        sweet: 0,
        bitter: 10,
        sour: 0,
        smoothness: 25
    },
    {
        name: "IAPAPA",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 223,
        maxYield: 3,
        minYield: 2,
        description1: BerryDescriptionPart1_Iapapa,
        description2: BerryDescriptionPart2_Iapapa,
        stageDuration: 6,
        spicy: 0,
        dry: 0,
        sweet: 0,
        bitter: 0,
        sour: 10,
        smoothness: 25
    },
    {
        name: "RAZZ",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 120,
        maxYield: 6,
        minYield: 3,
        description1: BerryDescriptionPart1_Razz,
        description2: BerryDescriptionPart2_Razz,
        stageDuration: 1,
        spicy: 10,
        dry: 10,
        sweet: 0,
        bitter: 0,
        sour: 0,
        smoothness: 20
    },
    {
        name: "BLUK",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 108,
        maxYield: 6,
        minYield: 3,
        description1: BerryDescriptionPart1_Bluk,
        description2: BerryDescriptionPart2_Bluk,
        stageDuration: 1,
        spicy: 0,
        dry: 10,
        sweet: 10,
        bitter: 0,
        sour: 0,
        smoothness: 20
    },
    {
        name: "NANAB",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 77,
        maxYield: 6,
        minYield: 3,
        description1: BerryDescriptionPart1_Nanab,
        description2: BerryDescriptionPart2_Nanab,
        stageDuration: 1,
        spicy: 0,
        dry: 0,
        sweet: 10,
        bitter: 10,
        sour: 0,
        smoothness: 20
    },
    {
        name: "WEPEAR",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 74,
        maxYield: 6,
        minYield: 3,
        description1: BerryDescriptionPart1_Wepear,
        description2: BerryDescriptionPart2_Wepear,
        stageDuration: 1,
        spicy: 0,
        dry: 0,
        sweet: 0,
        bitter: 10,
        sour: 10,
        smoothness: 20
    },
    {
        name: "PINAP",
        firmness: BERRY_FIRMNESS.HARD,
        size: 80,
        maxYield: 6,
        minYield: 3,
        description1: BerryDescriptionPart1_Pinap,
        description2: BerryDescriptionPart2_Pinap,
        stageDuration: 1,
        spicy: 10,
        dry: 0,
        sweet: 0,
        bitter: 0,
        sour: 10,
        smoothness: 20
    },
    {
        name: "POMEG",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 135,
        maxYield: 6,
        minYield: 2,
        description1: BerryDescriptionPart1_Pomeg,
        description2: BerryDescriptionPart2_Pomeg,
        stageDuration: 3,
        spicy: 10,
        dry: 0,
        sweet: 10,
        bitter: 10,
        sour: 0,
        smoothness: 20
    },
    {
        name: "KELPSY",
        firmness: BERRY_FIRMNESS.HARD,
        size: 150,
        maxYield: 6,
        minYield: 2,
        description1: BerryDescriptionPart1_Kelpsy,
        description2: BerryDescriptionPart2_Kelpsy,
        stageDuration: 3,
        spicy: 0,
        dry: 10,
        sweet: 0,
        bitter: 10,
        sour: 10,
        smoothness: 20
    },
    {
        name: "QUALOT",
        firmness: BERRY_FIRMNESS.HARD,
        size: 110,
        maxYield: 6,
        minYield: 2,
        description1: BerryDescriptionPart1_Qualot,
        description2: BerryDescriptionPart2_Qualot,
        stageDuration: 3,
        spicy: 10,
        dry: 0,
        sweet: 10,
        bitter: 0,
        sour: 10,
        smoothness: 20
    },
    {
        name: "HONDEW",
        firmness: BERRY_FIRMNESS.HARD,
        size: 162,
        maxYield: 6,
        minYield: 2,
        description1: BerryDescriptionPart1_Hondew,
        description2: BerryDescriptionPart2_Hondew,
        stageDuration: 3,
        spicy: 10,
        dry: 10,
        sweet: 0,
        bitter: 10,
        sour: 0,
        smoothness: 20
    },
    {
        name: "GREPA",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 149,
        maxYield: 6,
        minYield: 2,
        description1: BerryDescriptionPart1_Grepa,
        description2: BerryDescriptionPart2_Grepa,
        stageDuration: 3,
        spicy: 0,
        dry: 10,
        sweet: 10,
        bitter: 0,
        sour: 10,
        smoothness: 20
    },
    {
        name: "TAMATO",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 200,
        maxYield: 4,
        minYield: 2,
        description1: BerryDescriptionPart1_Tamato,
        description2: BerryDescriptionPart2_Tamato,
        stageDuration: 6,
        spicy: 20,
        dry: 10,
        sweet: 0,
        bitter: 0,
        sour: 0,
        smoothness: 30
    },
    {
        name: "CORNN",
        firmness: BERRY_FIRMNESS.HARD,
        size: 75,
        maxYield: 4,
        minYield: 2,
        description1: BerryDescriptionPart1_Cornn,
        description2: BerryDescriptionPart2_Cornn,
        stageDuration: 6,
        spicy: 0,
        dry: 20,
        sweet: 10,
        bitter: 0,
        sour: 0,
        smoothness: 30
    },
    {
        name: "MAGOST",
        firmness: BERRY_FIRMNESS.HARD,
        size: 140,
        maxYield: 4,
        minYield: 2,
        description1: BerryDescriptionPart1_Magost,
        description2: BerryDescriptionPart2_Magost,
        stageDuration: 6,
        spicy: 0,
        dry: 0,
        sweet: 20,
        bitter: 10,
        sour: 0,
        smoothness: 30
    },
    {
        name: "RABUTA",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 226,
        maxYield: 4,
        minYield: 2,
        description1: BerryDescriptionPart1_Rabuta,
        description2: BerryDescriptionPart2_Rabuta,
        stageDuration: 6,
        spicy: 0,
        dry: 0,
        sweet: 0,
        bitter: 20,
        sour: 10,
        smoothness: 30
    },
    {
        name: "NOMEL",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 285,
        maxYield: 4,
        minYield: 2,
        description1: BerryDescriptionPart1_Nomel,
        description2: BerryDescriptionPart2_Nomel,
        stageDuration: 6,
        spicy: 10,
        dry: 0,
        sweet: 0,
        bitter: 0,
        sour: 20,
        smoothness: 30
    },
    {
        name: "SPELON",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 133,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Spelon,
        description2: BerryDescriptionPart2_Spelon,
        stageDuration: 18,
        spicy: 40,
        dry: 10,
        sweet: 0,
        bitter: 0,
        sour: 0,
        smoothness: 70
    },
    {
        name: "PAMTRE",
        firmness: BERRY_FIRMNESS.VERY_SOFT,
        size: 244,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Pamtre,
        description2: BerryDescriptionPart2_Pamtre,
        stageDuration: 18,
        spicy: 0,
        dry: 40,
        sweet: 10,
        bitter: 0,
        sour: 0,
        smoothness: 70
    },
    {
        name: "WATMEL",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 250,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Watmel,
        description2: BerryDescriptionPart2_Watmel,
        stageDuration: 18,
        spicy: 0,
        dry: 0,
        sweet: 40,
        bitter: 10,
        sour: 0,
        smoothness: 70
    },
    {
        name: "DURIN",
        firmness: BERRY_FIRMNESS.HARD,
        size: 280,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Durin,
        description2: BerryDescriptionPart2_Durin,
        stageDuration: 18,
        spicy: 0,
        dry: 0,
        sweet: 0,
        bitter: 40,
        sour: 10,
        smoothness: 70
    },
    {
        name: "BELUE",
        firmness: BERRY_FIRMNESS.VERY_SOFT,
        size: 300,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Belue,
        description2: BerryDescriptionPart2_Belue,
        stageDuration: 18,
        spicy: 10,
        dry: 0,
        sweet: 0,
        bitter: 0,
        sour: 40,
        smoothness: 70
    },
    {
        name: "LIECHI",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 111,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Liechi,
        description2: BerryDescriptionPart2_Liechi,
        stageDuration: 24,
        spicy: 40,
        dry: 0,
        sweet: 40,
        bitter: 0,
        sour: 10,
        smoothness: 80
    },
    {
        name: "GANLON",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 33,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Ganlon,
        description2: BerryDescriptionPart2_Ganlon,
        stageDuration: 24,
        spicy: 0,
        dry: 40,
        sweet: 0,
        bitter: 40,
        sour: 0,
        smoothness: 80
    },
    {
        name: "SALAC",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 95,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Salac,
        description2: BerryDescriptionPart2_Salac,
        stageDuration: 24,
        spicy: 0,
        dry: 0,
        sweet: 40,
        bitter: 0,
        sour: 40,
        smoothness: 80
    },
    {
        name: "PETAYA",
        firmness: BERRY_FIRMNESS.VERY_HARD,
        size: 237,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Petaya,
        description2: BerryDescriptionPart2_Petaya,
        stageDuration: 24,
        spicy: 40,
        dry: 0,
        sweet: 0,
        bitter: 40,
        sour: 0,
        smoothness: 80
    },
    {
        name: "APICOT",
        firmness: BERRY_FIRMNESS.HARD,
        size: 75,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Apicot,
        description2: BerryDescriptionPart2_Apicot,
        stageDuration: 24,
        spicy: 0,
        dry: 40,
        sweet: 0,
        bitter: 0,
        sour: 40,
        smoothness: 80
    },
    {
        name: "LANSAT",
        firmness: BERRY_FIRMNESS.SOFT,
        size: 97,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Lansat,
        description2: BerryDescriptionPart2_Lansat,
        stageDuration: 24,
        spicy: 10,
        dry: 10,
        sweet: 10,
        bitter: 10,
        sour: 10,
        smoothness: 30
    },
    {
        name: "STARF",
        firmness: BERRY_FIRMNESS.SUPER_HARD,
        size: 153,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Starf,
        description2: BerryDescriptionPart2_Starf,
        stageDuration: 24,
        spicy: 10,
        dry: 10,
        sweet: 10,
        bitter: 10,
        sour: 10,
        smoothness: 30
    },
    {
        name: "ENIGMA",
        firmness: BERRY_FIRMNESS.UNKNOWN,
        size: 0,
        maxYield: 2,
        minYield: 1,
        description1: BerryDescriptionPart1_Enigma,
        description2: BerryDescriptionPart2_Enigma,
        stageDuration: 24,
        spicy: 40,
        dry: 40,
        sweet: 40,
        bitter: 40,
        sour: 40,
        smoothness: 40
    }
]

export let BerryCrush_BerryData: BerryCrushStats[] = [
    { difficulty: 50, powder: 20},
    { difficulty: 50, powder: 20},
    { difficulty: 50, powder: 20},
    { difficulty: 50, powder: 20},
    { difficulty: 50, powder: 20},
    { difficulty: 50, powder: 30},
    { difficulty: 50, powder: 30},
    { difficulty: 50, powder: 30},
    { difficulty: 50, powder: 30},
    { difficulty: 50, powder: 30},
    { difficulty: 60, powder: 50},
    { difficulty: 60, powder: 50},
    { difficulty: 60, powder: 50},
    { difficulty: 60, powder: 50},
    { difficulty: 60, powder: 50},
    { difficulty: 80, powder: 70},
    { difficulty: 80, powder: 70},
    { difficulty: 80, powder: 70},
    { difficulty: 80, powder: 70},
    { difficulty: 80, powder: 70},
    { difficulty: 100, powder: 100},
    { difficulty: 100, powder: 100},
    { difficulty: 100, powder: 100},
    { difficulty: 100, powder: 100},
    { difficulty: 100, powder: 100},
    { difficulty: 130, powder: 150},
    { difficulty: 130, powder: 150},
    { difficulty: 130, powder: 150},
    { difficulty: 130, powder: 150},
    { difficulty: 130, powder: 150},
    { difficulty: 160, powder: 250},
    { difficulty: 160, powder: 250},
    { difficulty: 160, powder: 250},
    { difficulty: 160, powder: 250},
    { difficulty: 160, powder: 250},
    { difficulty: 180, powder: 500},
    { difficulty: 180, powder: 500},
    { difficulty: 180, powder: 500},
    { difficulty: 180, powder: 500},
    { difficulty: 180, powder: 500},
    { difficulty: 200, powder: 750},
    { difficulty: 200, powder: 750},
    { difficulty: 150, powder: 200}
]

export class ENIGMA_BERRY_STRUCT {
    Berries: Berry[] = Berries
    berries: Berry[] = []
}

export interface ReceivedEnigmaBerry {
    berry: Berry;
    itemEffect: number[] // 18
    holdEffect: number
    holdEffectParam: number
    unk_001C: number[] // 0x4FA
}

export function InitEnigmaBerry() {
    let i: number;

    SaveBlock1Ptr.enigmaBerry.berry = new ENIGMA_BERRY_STRUCT();

    for (i = 0; i < 18; i++)
        SaveBlock1Ptr.enigmaBerry.itemEffect[i] = 0;

    SaveBlock1Ptr.enigmaBerry.holdEffect = 0;
    SaveBlock1Ptr.enigmaBerry.holdEffectParam = 0;
}

export function ClearEnigmaBerries() {
    // MEMORY MANAGEMENT IS SKIPPED
    // CpuFill16(0, &gSaveBlock1Ptr->enigmaBerry, sizeof(gSaveBlock1Ptr->enigmaBerry));
    InitEnigmaBerry();
}

export function SetEnigmaBerry(berry: ReceivedEnigmaBerry) {
    let src2: ReceivedEnigmaBerry;
    let i: number;

    ClearEnigmaBerries();

    src2 = berry;

    SaveBlock1Ptr.enigmaBerry.berry = src2.berry;

    for (i = 0; i < 18; i++)
    SaveBlock1Ptr.enigmaBerry.itemEffect[i] = src2.itemEffect[i];

    SaveBlock1Ptr.enigmaBerry.holdEffect = src2.holdEffect;
    SaveBlock1Ptr.enigmaBerry.holdEffectParam = src2.holdEffectParam;
}

export function IsEnigmaBerryValid(): boolean {
    if (SaveBlock1Ptr.enigmaBerry.berry.stageDuration == 0)
        return false;
    if (SaveBlock1Ptr.enigmaBerry.berry.maxYield == 0)
        return false;

    return true;
}

export function GetBerryInfo(berryIdx: number): Berry {
    if (berryIdx == ITEM_TO_BERRY(ITEM_ENIGMA_BERRY) && IsEnigmaBerryValid())
        return SaveBlock1Ptr.enigmaBerry.berry;

    if (berryIdx == 0 || berryIdx > ITEM_TO_BERRY(ITEM_ENIGMA_BERRY))
        berryIdx = 1;

    return Berries[berryIdx - 1];
}

export function ItemIdToBerryType(itemId: number): number {
    if (itemId - FIRST_BERRY_INDEX < 0 || itemId - FIRST_BERRY_INDEX > ITEM_ENIGMA_BERRY - FIRST_BERRY_INDEX)
        return 1;

    return ITEM_TO_BERRY(itemId);
}

export function BerryTypeToItemId(berryType: number): number {
    if (berryType - 1 < 0 || berryType - 1 > ITEM_ENIGMA_BERRY - FIRST_BERRY_INDEX)
        return FIRST_BERRY_INDEX;

    return berryType + FIRST_BERRY_INDEX - 1;
}

export function GetBerryNameByBerryType(berryType: number) {
    let berry: Berry = GetBerryInfo(berryType);
    return berry.name
}