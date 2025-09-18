import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    cache : Cache;

    constructor() {
        this.cache = new Cache(10000);
    }

    async fetchLocations(offset = 0, limit = 20): Promise<ShallowLocations> {
        const params: Record<string, string> = {};

        if (offset > 0)
            params.offset = offset.toString();
        if (limit > 0)
            params.limit = limit.toString();

        
        const locationURL: string = `${PokeAPI.baseURL}/location-area?` + new URLSearchParams(params).toString();

        
        if (!this.cache.has(locationURL))
        {
            const response = await fetch(locationURL);
            const shallowLocations = await response.json();
            this.cache.add(locationURL, shallowLocations); 
        }
        return this.cache.get(locationURL);
    }

    async fetchLocationData(locationName: string): Promise<LocationData> {
        const locationURL: string = `${PokeAPI.baseURL}/location-area/${locationName}`;
        
        if (!this.cache.has(locationURL))
        {
            const response = await fetch(locationURL);
            const locations = response.json();
            this.cache.add(locationURL, locations);
        }
        return this.cache.get(locationURL);
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

export type PokemonEncounter = {
    pokemon : {
        name: string,
        url: string,
    },
};

export type LocationData = {
    id: number,
    location: Location,
    pokemon_encounters: PokemonEncounter[]
};
