import { CLICommand } from "./repl.js";

export default function commandHelp(commands: Record<string, CLICommand>): void {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    for (const command of Object.values(commands))
        console.log(`${command.name}: ${command.description}`);
    console.log();
}