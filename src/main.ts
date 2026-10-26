import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
  const interval = 30000;
  const state = initState(interval);
  startREPL(state);
}

main();
