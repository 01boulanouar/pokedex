import { type State } from "./state.js";


export async function commandMap(state: State) {
    const shallowLocations = await state.pokeapi.fetchLocations(state.offset);
    state.nextLocationsURL = shallowLocations.next;
    state.prevLocationURL = shallowLocations.previous;
    state.offset += 20;
    for (const location of shallowLocations.results)
        console.log(location.name);
};

export async function commandMapb(state: State) {
    const shallowLocations = await state.pokeapi.fetchLocations(state.offset);
    state.nextLocationsURL = shallowLocations.next;
    state.prevLocationURL = shallowLocations.previous;
    if (state.offset >= 20)
        state.offset -= 20;
    for (const location of shallowLocations.results)
        console.log(location.name);
};