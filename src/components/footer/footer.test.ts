import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given the Footer component', () => {
  describe('When passed the parameters', () => {
    test('Then it should renderize the content', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Footer('slot');
      expect(element).toBeInstanceOf(Footer);
      const item = screen.getByRole('contentinfo');
      expect(item).toBeInTheDocument();
    });
  });
});
