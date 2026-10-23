import { PokeAPI } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandNextMap(state: State) {
  let nextLocation = undefined;

  if (state.nextLocationsURL !== null) {
    nextLocation = state.nextLocationsURL;
  }

  const locationList = await state.pokeapi.fetchLocations(nextLocation);

  for (const result of locationList.results) {
    console.log(result.name);
  }

  state.nextLocationsURL = locationList.next;
  state.prevLocationsURL = locationList.previous;
}

export async function commandPrevMap(state: State) {
  let prevLocation = undefined;

  if (state.prevLocationsURL !== null) {
    prevLocation = state.prevLocationsURL;
  }

  const locationList = await state.pokeapi.fetchLocations(prevLocation);

  for (const result of locationList.results) {
    console.log(result.name);
  }

  state.nextLocationsURL = locationList.next;
  state.prevLocationsURL = locationList.previous;
}
