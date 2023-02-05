/* eslint-disable no-unused-vars */
import { Pokemon } from 'pokedex-promise-v2';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  public tasks: any;
  constructor(public selector: string, public pokemonURL: any) {
    super();
    this.tasks = '';

    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    const resp = await fetch(this.pokemonURL);
    this.tasks = (await resp.json()) as Pokemon;
    this.template = `<li class="poke-list__card"><i class="fa-solid fa-star"></i><img class = "sprite" src = "${
      this.tasks.sprites.front_default
    }"><span>
    ${
      this.tasks.name.charAt(0).toUpperCase() +
      this.tasks.name.slice(1, this.tasks.name.length)
    }</span></li>`;
    this.render('beforeend');
  }
  // Render(place: globalThis.InsertPosition) {
  //   super.render(place);
  //   document
  //     .querySelector(`#b${this.task.id}`)
  //     ?.addEventListener('click', () => {
  //       this.deleteTask(this.task.id);
  //     });
  //   document
  //     .querySelector(`#c${this.task.id}`)
  //     ?.addEventListener('change', () => {
  //       this.task.isCompleted = !this.task.isCompleted;
  //       this.updateTask(this.task);
  //     });
  // }

  createTemplate() {
    return ``;
  }
}
