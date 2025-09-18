import { CLICommand } from "./repl.js";


export default function commandExit(commands: Record<string, CLICommand>): void {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}