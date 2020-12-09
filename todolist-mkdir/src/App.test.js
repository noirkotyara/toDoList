import { render, screen } from '@testing-library/react';
import AppContainer from './App';

test('renders learn react link', () => {
  render(<AppContainer />);
  expect(screen.getByText('MKdir')).toBeInTheDocument();
});



