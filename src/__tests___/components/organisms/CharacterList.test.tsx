import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CharacterList } from '@/components/organisms/CharacterList';
import { mockCharacters } from '../mocks';

describe('CharacterList', () => {
  vi.mock('@/hooks/useCharacters', () => {
    return {
      useCharacters: () => mockCharacters,
    };
  });

  it('should render the character list component', () => {
    render(<CharacterList />);

    const countElement = screen.getByText('2 alive characters');
    const cardElements = screen.getAllByTestId('card');

    expect(countElement).toBeDefined();
    expect(cardElements.length).toBe(2);
  });
});
