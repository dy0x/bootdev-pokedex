import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
};

export function initState(): State {
  const rl = createInterface({
    output: process.stdout,
    input: process.stdin,
    prompt: "Pokedex > ",
  });
  return {
    readline: rl,
    commands: getCommands(),
  };
}
