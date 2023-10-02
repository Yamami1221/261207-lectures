import { PokemonApiResult } from "./PokemonApiResult";

export type Pokemon = Pick<PokemonApiResult, 'name' | 'weight' | 'height'> & {
    imageUrl: string;
    types: string[];
};
