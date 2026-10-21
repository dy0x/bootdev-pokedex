import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log("Welcome to the Pokedex!\nUsage:\n");
  const commandsList = Object.values(commands);
  for (let x of commandsList) {
    console.log(`${x.name}: ${x.description}`);
  }
}
