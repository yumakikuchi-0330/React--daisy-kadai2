import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders employee heading', () => {
  render(<App />);
  expect(screen.getByText('Employee')).toBeInTheDocument();
});
