import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/molecules/Header';

describe('Header', () => {
  it('should render the header component', () => {
    render(<Header />);
    const headerElement = screen.getByText('Rick and Morty');
    expect(headerElement).toBeDefined();
  });
});
