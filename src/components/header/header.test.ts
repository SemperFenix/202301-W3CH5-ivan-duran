import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given the Header component', () => {
  describe('When passed the parameters', () => {
    test('Then it should renderize the content', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Header('slot');
      expect(element).toBeInstanceOf(Header);
      const item = screen.getByRole('heading');
      expect(item).toBeInTheDocument();
    });
  });
});
