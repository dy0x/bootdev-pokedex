import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  const transformInput: string[] = input.trim().toLowerCase().split(/\s+/);
  return transformInput;
}

export function startREPL(state: State) {
  state.readline.prompt();
  state.readline.on("line", (line) => {
    const cleanLine = cleanInput(line);
    const inputCommand = cleanLine[0];
    if (inputCommand.length === 0) {
      state.readline.prompt();
      return;
    }
    if (Object.hasOwn(state.commands, inputCommand)) {
      const command = state.commands[inputCommand];
      command.callback(state);
    } else {
      console.log("Unknown command");
    }

    state.readline.prompt();
  });
}
