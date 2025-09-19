import { type State } from "./state.js";

export default async function commandExplore(state : State, ...args: string[]) {
    if (!args || !args[0])
        return;
    console.log(`Exploring ${args[0]}...`);
    const location = await state.pokeapi.fetchLocationData(args[0]);
    if (!location)
    {
        console.log("invalid location");
        return ;
    }
    console.log("Found Pokemon:");
    for (const pokemon_encounter of location.pokemon_encounters)
        console.log(` - ${pokemon_encounter.pokemon.name}`);
}