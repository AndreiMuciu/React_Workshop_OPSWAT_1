import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FancyButton from './FancyButton';

describe('FancyButton', () => {
  it('renders with default text', () => {
    render(<FancyButton />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
  it('shows loading spinner', () => {
    render(<FancyButton loading>Load</FancyButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
  });
});
