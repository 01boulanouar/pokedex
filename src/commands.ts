import type { CLICommand } from "./state.js";
import commandExit from "./command_exit.js";
import commandHelp from "./command_help.js";
import {commandMap, commandMapb} from "./command_map.js";
import commandExplore from "./command_explore.js";

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
        map: {
            name: "map",
            description: "Displaysthe next 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 locations",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "explores a given location",
            callback: commandExplore
        },
    };

    return (commands);
}