import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  const transformInput: string[] = input.trim().toLowerCase().split(/\s+/);
  return transformInput;
}

export function startREPL(state: State) {
  state.readline.prompt();
  state.readline.on("line", async (line) => {
    const cleanLine = cleanInput(line);
    const [input, ...args] = cleanLine;
    if (input.length === 0) {
      state.readline.prompt();
      return;
    }
    if (Object.hasOwn(state.commands, input)) {
      const command = state.commands[input];
      try {
        await command.callback(state, ...args);
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      console.log("Unknown command");
    }

    state.readline.prompt();
  });
}
