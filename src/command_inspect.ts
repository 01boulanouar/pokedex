import { type State } from "./state.js";

export default async function commandInspect(state: State, ...args: string[]) {
    if (!args || !args[0])
        return;
    const pokemon = state.pokedex[args[0]];
    if (!pokemon) 
    {
        console.log("you have not caught that pokemon");
        return;
    }
    else
    {
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log(`Stats:`);
        for (const stat of pokemon.stats)
            console.log(` -${stat.stat.name}: ${stat.base_stat}`);

        console.log(`Types:`);
         for (const type of pokemon.types)
            console.log(` - ${type.type.name}`);

    }
}