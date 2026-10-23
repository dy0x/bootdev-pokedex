import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
};

export function initState(): State {
  const rl = createInterface({
    output: process.stdout,
    input: process.stdin,
    prompt: "Pokedex > ",
  });
  const poke = new PokeAPI();

  let prevURL = null;
  //let nextURL = null;
  let nextURL = "https://pokeapi.co/api/v2/location-area?limit=20&offset=0";

  return {
    readline: rl,
    commands: getCommands(),
    pokeapi: poke,
    nextLocationsURL: nextURL,
    prevLocationsURL: prevURL,
  };
}
