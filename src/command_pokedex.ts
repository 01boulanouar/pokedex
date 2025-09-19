import { type State } from "./state.js";


export default async function commandPokedex(state: State ) {

    const pokedex = state.pokedex;
    console.log("Your Pokedex:")
    for (const idx in pokedex)
        console.log(` - ${pokedex[idx].name}`);
}