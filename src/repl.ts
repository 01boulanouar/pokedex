import { type State } from "./state.js";

export async function startREPL(state: State) {

    state.readline.prompt();

    state.readline.on("line", async (line) => {
        const [command, ...args] = cleanInput(line);

        if (command.length !== 0)
        {
            if (command in state.commands) {
                try {
                    await state.commands[command].callback(state, ...args);
                } catch (err)
                {
                    if (err instanceof Error)
                        console.log(err.message);
                }
            }
            else
            console.log("Unknown command");
        }
      
        state.readline.prompt();
    });
}


export function cleanInput(input: string): string[] {
    return input
           .trim()
           .toLowerCase()
           .split(" ")
           .filter((word) => word !== "");
}

