import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main link', () => {
  render(<App />);
  const linkElement = screen.getByText(/главная/i);
  expect(linkElement).toBeInTheDocument();
});