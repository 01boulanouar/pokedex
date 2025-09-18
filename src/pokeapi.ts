

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {

    }

    async fetchLocations(offset = 0, limit = 20): Promise<ShallowLocations> {
        const params: Record<string, string> = {};

        if (offset > 0)
            params.offset = offset.toString();
        if (limit > 0)
            params.limit = limit.toString();


        const locationURL: string = `${PokeAPI.baseURL}/location-area?` + new URLSearchParams(params).toString();

        const response = await fetch(locationURL);
        const shallowLocations = await response.json();
        
        return shallowLocations;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const locationURL: string = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(locationURL);
        const locations = response.json();
        return locations;
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

