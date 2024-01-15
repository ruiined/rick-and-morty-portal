'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCharacters } from '@/hooks/useCharacters';
import { Card, Grid, List } from '../molecules';
import { Button } from '../atoms/';
import { useRouter } from 'next/navigation';

export const CharacterList = ({ page }: { page: number }) => {
  const router = useRouter();
  const { characters, count, pages } = useCharacters(page);

  return (
    <main>
      <p className="mb-16 md:mb-6 text-center text-slate-600">
        {count} alive morty characters
      </p>
      <Grid>
        {characters.map((character) => {
          const description = [
            ['Name', character.name],
            ['Gender', character.gender],
            ['Species', character.species],
          ];

          return (
            <Card key={character.id}>
              <Image
                className="w-full h-48 object-cover rounded-t-lg"
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
              />
              <div className="p-2 md:p-4 text-sm">
                <List items={description} />
              </div>
              <Link href={`/${character.id}`}>
                <Button label="View Profile" />
              </Link>
            </Card>
          );
        })}
      </Grid>
      <div className="flex justify-center mt-6 md:mt-16">
        <Button
          label="Previous"
          handleClick={() => router.push(`/?page=${page - 1}`)}
          disabled={page === 1}
        />
        <Button
          label="Next"
          handleClick={() => router.push(`/?page=${page + 1}`)}
          disabled={page === pages}
        />
      </div>
    </main>
  );
};
