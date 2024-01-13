'use client';

import { useCharacters } from '@/hooks/useCharacters';
import { Card, Grid } from '../molecules';
import Image from 'next/image';
import Link from 'next/link';

export const CharacterList = () => {
  const { characters, count } = useCharacters();

  return (
    <main className="flex flex-col p-8 gap-8">
      <p>{count} alive characters</p>

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
            <div className="p-4">
              <p>Name: {character.name}</p>
              <p>Gender: {character.gender}</p>
              <p>Species: {character.species}</p>
            </div>
            <Link href={`/${character.id}`}>
              <button className="bg-slate-100 text-slate-800 p-2 w-full hover:text-slate-900 hover:bg-slate-200 transition duration-300">
                View Profile
              </button>
            </Link>
          </Card>
        ))}
      </Grid>
    </main>
  );
};
