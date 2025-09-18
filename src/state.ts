import { createInterface, type Interface } from "readline";
import getCommands from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
    pokeapi: PokeAPI,
    offset: number,
    nextLocationsURL: string,
    prevLocationURL: string,

}

export function initState(): State {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    const commands = getCommands();

    const pokeapi = new PokeAPI();

    const offset = 0;
    const nextLocationsURL = "";
    const prevLocationURL = "";

    return { 
        readline,
        commands,
        pokeapi,
        offset,
        nextLocationsURL,
        prevLocationURL,
    };
}

