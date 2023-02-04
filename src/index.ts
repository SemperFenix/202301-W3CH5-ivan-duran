/* eslint-disable no-new */
import { Header } from './components/header/header';
import { PokemonApiRepo } from './models/pokemon';

new Header('.app');

const p = await new PokemonApiRepo().getPoke().then((r) => r.name);

console.log(`${p} es farlopero'`);
