import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  const location = args[0];
  if (!location) {
    console.log(`Usage: explore <area_name>`);
    return;
  }
  console.log(`Exploring ${location}...`);
  const areaData = await state.pokeapi.fetchLocation(location);

  console.log(`Found Pokemon:`);
  for (const encounter of areaData.pokemon_encounters) {
    console.log(` - ${encounter.pokemon.name}`);
  }
}
