import type { CLICommand } from "./state.js";
import commandExit from "./command_exit.js";
import commandHelp from "./command_help.js";

export default function getCommands(): Record<string, CLICommand> {

    const commands = {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
    };

    return (commands);
}