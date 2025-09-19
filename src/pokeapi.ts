import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    cache : Cache;

    constructor() {
        this.cache = new Cache(10000);
    }

    async fetchPage<T>(pageURL: string): Promise<T> {
        if (!this.cache.has(pageURL))
        {
            try {
                const response = await fetch(pageURL);
                const data = await response.json();
                this.cache.add(pageURL, data); 
            } catch (err)
            {
                // if (err instanceof Error) console.log("failed to fetch data");
            }
           
        }
        return this.cache.get(pageURL) as T;
    }

    async fetchLocations(offset = 0, limit = 20): Promise<ShallowLocations> {
        const params: Record<string, string> = {};

        if (offset > 0)
            params.offset = offset.toString();
        if (limit > 0)
            params.limit = limit.toString();

        const locationURL = `${PokeAPI.baseURL}/location-area?` + new URLSearchParams(params).toString();

        return this.fetchPage(locationURL);

    }

    async fetchLocationData(locationName: string): Promise<LocationData> {
        const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        
        return this.fetchPage(locationURL);
    }

    async fetchPokemonData(pokemonName: string): Promise<Pokemon> {
        const pokemonURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        
        return this.fetchPage(pokemonURL);
    }
};

export type Location = {
    name: string,
    url: string
};

export type ShallowLocations = {
  count: number,
  next: string,
  previous: string,
  results: Location[]
};

export type Pokemon = {
    name: string,
    url: string,
    base_experience: number,
}

export type PokemonEncounter = {
    pokemon: Pokemon,
};

export type LocationData = {
    id: number,
    location: Location,
    pokemon_encounters: PokemonEncounter[]
};
