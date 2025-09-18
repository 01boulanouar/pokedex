import { createInterface } from "node:readline";
import commandExit from "./command_exit.js";
import commandHelp from "./command_help.js";

export function startREPL(): void {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", (line) => {
        const words = cleanInput(line);
        const command = words[0];
        const availabeCommands = getCommands();
        if (words.length !== 0)
        {
            if (command in availabeCommands)
            {
                availabeCommands[command].callback(availabeCommands);
            }
            else
            console.log("Unknown command");
        }
      
        rl.prompt();
    });
}


export type CLICommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        }

    };
}


export function cleanInput(input: string): string[] {
    return input
           .trim()
           .toLowerCase()
           .split(" ")
           .filter((word) => word !== "");
}

