import { type State } from "./state.js";

export default async function commandCatch(state: State, ...args: string[]) {
    if (!args || !args[0])
        return;
    console.log(`Throwing a Pokeball at ${args[0]}...`);
    const pokemon = await state.pokeapi.fetchPokemonData(args[0]);
    if (!pokemon)
    {
        console.log("invalid pokemon");
        return ;
    }
    const chance = Math.floor(Math.random() * 200);
    if (chance > pokemon.base_experience)
    {
        state.pokedex[pokemon.name] = pokemon;
         console.log(`Caught ${args[0]}!`);
    }
    else
        console.log("Try again :(");
};
