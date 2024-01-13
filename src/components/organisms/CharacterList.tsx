'use client';

import { useCharacters } from '@/hooks/useCharacters';
import { Header } from '../molecules/Header';
import { Grid } from '../molecules';

export const CharacterList = () => {
  const { characters, count } = useCharacters();

  return (
    <main className="flex flex-col">
      <Header />

      <p>{count} characters</p>

      <Grid>
        {characters.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </Grid>
    </main>
  );
};
