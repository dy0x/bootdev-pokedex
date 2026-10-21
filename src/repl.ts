import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";
import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
  const transformInput: string[] = input.trim().toLowerCase().split(/\s+/);
  return transformInput;
}

export function startREPL() {
  const rl = createInterface({
    output: process.stdout,
    input: process.stdin,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (line) => {
    const cleanLine = cleanInput(line);
    const commands = getCommands();
    if (cleanLine[0].length == 0) {
      rl.prompt();
      return;
    }
    if (cleanLine[0] in commands) {
      const command = commands[cleanLine[0]];
      command.callback(commands);
    } else {
      console.log("Unknown command");
    }

    rl.prompt();
  });
}
