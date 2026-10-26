import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache;

  constructor(cacheInterval: number) {
    this.#cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    if (!pageURL) {
      pageURL = `${PokeAPI.baseURL}/location-area?offset=0&limit=20`;
    }
    const cachedLocation = this.#cache.get<ShallowLocations>(pageURL);
    if (cachedLocation) {
      return cachedLocation;
    }

    try {
      const response = await fetch(pageURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result: ShallowLocations = await response.json();
      this.#cache.add<ShallowLocations>(pageURL, result);
      return result;
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const pageURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cachedArea = this.#cache.get<Location>(pageURL);
    if (cachedArea) {
      return cachedArea;
    }

    try {
      const response = await fetch(pageURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result: Location = await response.json();
      this.#cache.add<Location>(pageURL, result);
      return result;
    } catch (error: any) {
      throw error;
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type Location = {
  id: number;
  pokemon_encounters: { pokemon: { name: string; url: string } }[];
};
