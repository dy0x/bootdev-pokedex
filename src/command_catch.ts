import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  const pokemon = args[0];
  if (!pokemon) {
    console.log(`Usage: catch <pokemon_name>`);
    return;
  }
  console.log(`Throwing a Pokeball at ${pokemon}...`);
  const pokemonStats = await state.pokeapi.fetchPokemon(pokemon);

  const chance = 100 / (pokemonStats.base_experience + 100);
  if (Math.random() > chance) {
    console.log(`${pokemon} escaped!`);
    return;
  } else {
    console.log(`${pokemon} was caught!`);
    if (!state.pokedex[pokemon]) {
      state.pokedex[pokemon] = pokemonStats;
      console.log(`You may now inspect it with the inspect command.`);
    }
  }
}
