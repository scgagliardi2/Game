import { SPECIES } from "../pokemon/data/Species";

export interface PokedexEntry
{
    /*0x00*/ categoryName: string
    /*0x0C*/ height: number //in decimeters
    /*0x0E*/ weight: number //in hectograms
    /*0x10*/ description: string
    /*0x14*/ unusedDescription: string
    ///*0x18*/ unused: number
    /*0x1A*/ pokemonScale: number
    /*0x1C*/ pokemonOffset: number
    /*0x1E*/ trainerScale: number
    /*0x20*/ trainerOffset: number
}

export interface PokedexCategoryPage
{
    species: SPECIES[]
    count: number
}