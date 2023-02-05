/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { PokemonApiRepo } from '../../services/repository/pokemon.repo.api';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './main.scss';

export class Main extends Component {
  constructor(public selector: string, public url: any, public pokemons: any) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
    <main class="main">
      <nav class="pages">
        <div class="pages__prev"><i class="fa-sharp fa-solid fa-arrow-left"></i><span>Prev</span></div>
        <div class="pages__next"><span>Next</span><i class="fa-sharp fa-solid fa-arrow-right"></i></div>
      </nav>
      <ul class = "poke-list"></ul>
      <nav class="pages">
        <div class="pages__prev"><i class="fa-sharp fa-solid fa-arrow-left"></i><span>Prev</span></div>
        <div class="pages__next"><span>Next</span><i class="fa-sharp fa-solid fa-arrow-right"></i></div>
      </nav>>
    </main>`;
  }

  async loadPrev() {
    if (this.url.previous) {
      const previous = await new PokemonApiRepo().getPoke(this.url.previous);
      return new Main('.header', previous, previous.results);
    }

    return new Main('.header', this.url, this.url.results);
  }

  async loadNext() {
    if (this.url.next) {
      const next = await new PokemonApiRepo().getPoke(this.url.next);
      return new Main('.header', next, next.results);
    }

    return new Main('.header', this.url, this.url.results);
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.pokemons.forEach((item: PokemonApiRepo) => {
      new Card('ul', item.url);
    });
    const prevButton = document.querySelectorAll('.pages__prev');

    prevButton.forEach((item) =>
      item.addEventListener('click', () => {
        document.querySelector('main')!.innerHTML = '';
        this.loadPrev();
      })
    );

    const nextButton = document.querySelectorAll('.pages__next');

    nextButton.forEach((item) =>
      item.addEventListener('click', () => {
        document.querySelector('main')!.innerHTML = '';
        this.loadNext();
      })
    );
  }
}
