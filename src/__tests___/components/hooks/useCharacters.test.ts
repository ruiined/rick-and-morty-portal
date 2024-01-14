import { describe, expect, it, vi } from 'vitest';
import { useCharacter } from '../../../hooks/useCharacters';

vi.mock('@/hooks/useCharacters', () => {
  return {
    useCharacter: (id: number) => ({
      name: 'Rick Sanchez',
      image: 'https://example.com/rick.png',
      description: [
        ['Status', 'Alive'],
        ['Origin', 'Earth (C-137)'],
      ],
      location: [
        ['Name', 'Earth (Replacement Dimension)'],
        ['Type', 'Planet'],
        ['Dimension', 'Replacement Dimension'],
        ['Residents', 42],
      ],
      episodes: [
        ['First appearance', 'Pilot'],
        ['First appearance air date', 'December 2, 2013'],
        ['First appearance character count', 6],
        ['Last appearance', 'Star Mort: Rickturn of the Jerri'],
        ['Last appearance air date', 'May 31, 2020'],
        ['Last appearance character count', 8],
      ],
    }),
  };
});

describe('useCharacter', () => {
  it('should return character details', () => {
    const id = 1;

    const character = useCharacter(id);

    expect(character.name).toBe('Rick Sanchez');
    expect(character.image).toBe('https://example.com/rick.png');
    expect(character.description).toEqual([
      ['Status', 'Alive'],
      ['Origin', 'Earth (C-137)'],
    ]);
    expect(character.location).toEqual([
      ['Name', 'Earth (Replacement Dimension)'],
      ['Type', 'Planet'],
      ['Dimension', 'Replacement Dimension'],
      ['Residents', 42],
    ]);
    expect(character.episodes).toEqual([
      ['First appearance', 'Pilot'],
      ['First appearance air date', 'December 2, 2013'],
      ['First appearance character count', 6],
      ['Last appearance', 'Star Mort: Rickturn of the Jerri'],
      ['Last appearance air date', 'May 31, 2020'],
      ['Last appearance character count', 8],
    ]);
  });
});
