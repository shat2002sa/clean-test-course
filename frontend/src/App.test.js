import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(await screen.findByText(/Welcome/i)).toBeInTheDocument();
});
