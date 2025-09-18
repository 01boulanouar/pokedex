import { type State } from "./state.js";
import { type LocationData } from "./pokeapi.js"

export default async function commandExplore(state : State, ...args: string[]): Promise<void> {
    if (!args || !args[0])
        return;
    console.log(`Exploring ${args[0]}...`);
    const location : LocationData = await state.pokeapi.fetchLocationData(args[0]);
    console.log("Found Pokemon:");
    for (const pokemon_encounter of location.pokemon_encounters)
        console.log(` - ${pokemon_encounter.pokemon.name}`);
}