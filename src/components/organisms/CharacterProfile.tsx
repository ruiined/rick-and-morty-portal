'use client';

import { useCharacter } from '@/hooks/useCharacters';
import Image from 'next/image';
import Link from 'next/link';
import { ListItem } from '../molecules';

export const CharacterProfile = ({ id }: { id: string }) => {
  const character = useCharacter(Number(id));

  if (!character) {
    return <p>Not found</p>;
  }

  return (
    <div className="responsive flex flex-col justify-center align-middle items-center">
      <Link
        href="/"
        className="text-slate-600 p-2 hover:text-slate-900 transition duration-300"
      >
        &#8617; Go back
      </Link>
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          <Image
            className="rounded-full object-cover mt-2 shadow-md"
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">{character.name}</h1>
            <ListItem label="Status" value={character.status} />
            <ListItem label="Origin" value={character.origin.name} />
          </div>
        </div>
      </div>
      <div className="mt-20">
        {Object.entries(character).map(([key, value]) => {
          return (
            <p key={key}>
              {key}: {JSON.stringify(value)}
            </p>
          );
        })}
      </div>
    </div>
  );
};
