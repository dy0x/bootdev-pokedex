import type { State } from "./state.js";

export async function commandPokedex(state: State) {
  const pokedexEntries = Object.keys(state.pokedex);

  if (pokedexEntries.length === 0) {
    console.log(`You have not caught any Pokemon!`);
    return;
  }

  console.log("Your Pokedex:");
  for (const pokemon of pokedexEntries) {
    console.log(` - ${pokemon}`);
  }
}
