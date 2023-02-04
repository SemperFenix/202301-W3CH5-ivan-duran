/* eslint-disable no-new */
import { Header } from './components/header/header';
import { PokemonApiRepo } from './services/repository/pokemon.repo.api';

new Header('.app');

const p = await new PokemonApiRepo().getPoke();

console.log(p.stats);
