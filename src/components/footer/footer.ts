/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string, public title: string = 'Learning DOM') {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    return `
      <footer class="footer">
        <adress class="footer__adress">ISDI Coders - Iván Durán - 2023</adress>
      </footer>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
