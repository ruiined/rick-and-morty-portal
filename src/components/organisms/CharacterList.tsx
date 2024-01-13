'use client';

import { useCharacters } from '@/hooks/useCharacters';
import { Card, Grid, Header } from '../molecules';
import Image from 'next/image';

export const CharacterList = () => {
  const { characters, count } = useCharacters();

  return (
    <main className="flex flex-col">
      <Header />

      <p className="p-6">{count} alive characters</p>

      <Grid>
        {characters.map((character) => (
          <Card key={character.id}>
            <Image
              className="w-full h-48 object-cover"
              src={character.image}
              alt={character.name}
              width={300}
              height={300}
            />
            <p>Name: {character.name}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <button className="bg-slate-100 text-slate-800 p-2 w-full hover:text-slate-900 hover:bg-slate-200 transition duration-300">
              View Profile
            </button>
          </Card>
        ))}
      </Grid>
    </main>
  );
};
