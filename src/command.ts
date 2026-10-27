import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandNextMap, commandPrevMap } from "./command_map.js";
import { commandPokedex } from "./command_pokedex.js";
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
    catch: {
      name: "catch",
      description: "Catch a Pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a Pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "View all the Pokemon you have caught",
      callback: commandPokedex,
    },
  };
}
