import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  const pokemon = args[0];
  if (!pokemon) {
    console.log(`Usage: inspect <pokemon_name>`);
    return;
  }

  const pokedexEntry = state.pokedex[pokemon];
  if (!pokedexEntry) {
    console.log(`you have not caught that pokemon`);
    return;
  }

  console.log(`Name: ${pokedexEntry.name}`);
  console.log(`Height: ${pokedexEntry.height}`);
  console.log(`Weight: ${pokedexEntry.weight}`);

  console.log(`Stats:`);
  for (const stat of pokedexEntry.stats) {
    console.log(` -${stat.stat.name}: ${stat.base_stat}`);
  }

  console.log(`Types:`);
  for (const type of pokedexEntry.types) {
    console.log(` - ${type.type.name}`);
  }
}
