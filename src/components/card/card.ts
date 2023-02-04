/* eslint-disable no-unused-vars */
import { Pokemon } from 'pokedex-promise-v2';
import { Component } from '../component/component';

export class Card extends Component {
  public tasks: any;
  constructor(public selector: string, public pokemonURL: any) {
    super();
    this.tasks = '';

    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    console.log(this.pokemonURL);
    const resp = await fetch(this.pokemonURL);
    this.tasks = (await resp.json()) as Pokemon;
    this.template = `<li><img src = "${this.tasks.sprites.front_default}">
    ${this.tasks.name.toUpperCase()}</li>`;
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
    return `
     <li class="serie">
            </li>`;
  }
}
