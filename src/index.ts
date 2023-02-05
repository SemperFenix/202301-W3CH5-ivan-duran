/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { PokemonApiRepo } from './services/repository/pokemon.repo.api';
import './index.scss';
import { Footer } from './components/footer/footer';

export const p = await new PokemonApiRepo().getPoke();

new Header('.app');
new Main('header', p, p.results);

new Footer('main');
