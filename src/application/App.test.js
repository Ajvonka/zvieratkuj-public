import { render, screen } from '@testing-library/react';
import JsxHTML from './JsxHTML';

test('renders learn react link', () => {
  render(<JsxHTML />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
