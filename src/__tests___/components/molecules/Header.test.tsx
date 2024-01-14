import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/molecules';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
    expect(screen.getByText('Rick and Morty')).toBeDefined();
  });
});
