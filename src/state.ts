import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  pokedex: Record<string, Pokemon>;
};

export function initState(interval: number = 30000): State {
  const rl = createInterface({
    output: process.stdout,
    input: process.stdin,
    prompt: "Pokedex > ",
  });
  const poke = new PokeAPI(interval);

  let prevURL = null;
  //let nextURL = null;
  let nextURL = "https://pokeapi.co/api/v2/location-area?limit=20&offset=0";

  return {
    readline: rl,
    commands: getCommands(),
    pokeapi: poke,
    nextLocationsURL: nextURL,
    prevLocationsURL: prevURL,
    pokedex: {},
  };
}
