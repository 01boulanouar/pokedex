import { CLICommand } from "./repl.js";

export default function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    for (let command in commands)
    {
        console.log(`${command}: ${commands[command].description}`);
    }
}