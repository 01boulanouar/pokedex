import { type State } from "./state.js";

export default function commandExit(state : State): void {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close();
    process.exit(0);
}