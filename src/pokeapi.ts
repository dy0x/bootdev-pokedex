export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    if (!pageURL) {
      pageURL = `${PokeAPI.baseURL}/location-area?offset=0&limit=20`;
    }

    try {
      const response = await fetch(pageURL);
      if (!response.ok) {
        throw new Error(`Resonse status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  }
  // async fetchLocation(locationName: string): Promise<Location> {
  //   // implement
  // }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

// export type Location = {
//   // add properties here
// };
