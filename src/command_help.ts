import type { State } from "./state.js";

export async function commandHelp(state: State) {
  console.log("Welcome to the Pokedex!\nUsage:\n");
  const commandsList = Object.values(state.commands);
  for (const command of commandsList) {
    console.log(`${command.name}: ${command.description}`);
  }
}
