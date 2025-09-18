import { type State } from "./state.js";

export function startREPL(state: State): void{

    state.readline.prompt();

    state.readline.on("line", async (line) => {
        const words = cleanInput(line);
        const command = words[0];

        if (words.length !== 0)
        {
            if (command in state.commands) {
                try {
                    await state.commands[command].callback(state);
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

