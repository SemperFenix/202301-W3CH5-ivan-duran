/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Learning DOM') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
              <img src="./assets/images/pokemon-logo.svg" alt="" srcset="">

        <h1 class = "header__title">Otra Pokèdex más</h1>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
