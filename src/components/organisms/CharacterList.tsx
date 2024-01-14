'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCharacters } from '@/hooks/useCharacters';
import { Card, Grid } from '../molecules';
import { Button } from '../atoms/';

export const CharacterList = () => {
  const { characters, count } = useCharacters();

  return (
    <main>
      <p className="mb-16 md:mb-6 text-center text-slate-600">
        {count} alive characters
      </p>

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
              <Button label="View Profile" />
            </Link>
          </Card>
        ))}
      </Grid>
    </main>
  );
};
