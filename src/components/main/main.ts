import { Card } from '../card/card';
import { Component } from '../component/component';

export class Main extends Component {
  constructor(public selector: string, public pokemons: any) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
    <main class="main">
     <ul></ul>
    </main>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.pokemons.forEach((item) => {
      console.log(item.url);
      new Card('ul', item.url);
    });
  }
}
