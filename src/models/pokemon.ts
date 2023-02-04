import { Pokedex } from 'pokedex-promise-v2';

export class PokemonApiRepo {
  url: string;
  constructor(public storeName: string = 'Pokemon') {
    this.url = 'https://pokeapi.co/api/v2/pokemon/ditto';
  }

  async getPoke(): Promise<Pokedex> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as Pokedex;
    return data;
  }
}
