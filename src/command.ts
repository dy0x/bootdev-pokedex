import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandNextMap, commandPrevMap } from "./command_map.js";
import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Display the map (forwards)",
      callback: commandNextMap,
    },
    mapb: {
      name: "mapb",
      description: "Display the map (backwards)",
      callback: commandPrevMap,
    },
    explore: {
      name: "explore",
      description: "Explore a location",
      callback: commandExplore,
    },
  };
}
