import { createInterface } from "node:readline";

export function startREPL(): void {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (words.length !== 0)
            console.log(`Your command was: ${words[0]}`);
        
        rl.prompt();
    });
}

export function cleanInput(input: string): string[] {
    return input
           .trim()
           .toLowerCase()
           .split(" ")
           .filter((word) => word !== "");
}

