/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { PokemonApiRepo } from './services/repository/pokemon.repo.api';
import './index.scss';
import { Footer } from './components/footer/footer';

const p = await new PokemonApiRepo().getPoke();
console.log(p);

new Header('.app');
new Main('header', p.results);
new Footer('main');
