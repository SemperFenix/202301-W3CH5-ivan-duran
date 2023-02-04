export interface Pokemon {
  abilities: object[];
  base_experience: number;
  forms: object[];
  game_indices: object[];
  height: number;
  held_items: object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: object[];
  species: object;
  sprites: object;
  stats: object[];
  types: object[];
  weight: number;
}

export class PokemonApiRepo {
  url: string;
  constructor(public storeName: string = 'Pokemon') {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getPoke(url: any = this.url): Promise<Pokemon> {
    const resp = await fetch(url);
    const data = (await resp.json()) as Pokemon;
    return data;
  }

  async getTask(id: Pokemon['id']): Promise<Pokemon> {
    const url = this.url + '/' + id;
    const resp = await fetch(this.url);
    const data = (await resp.json()) as Pokemon;
    return data;
  }

  async createTask(task: Pokemon): Promise<Pokemon> {
    const resp = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as Pokemon;
    return data;
  }

  async update(task: Partial<Pokemon>): Promise<Pokemon> {
    const url = this.url + '/' + task.id;
    const resp = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as Pokemon;
    return data;
  }

  async delete(id: Pokemon['id']): Promise<void> {
    const url = this.url + '/' + id;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
  }
}
