'use client';

import { useCharacter } from '@/hooks/useCharacters';
import Image from 'next/image';
import Link from 'next/link';

export const CharacterProfile = ({ id }: { id: string }) => {
  const character = useCharacter(Number(id));

  if (!character) {
    return <p>Not found</p>;
  }

  return (
    <div>
      <Link href="/">
        <button className=" text-slate-800 p-2 hover:text-slate-900 hover:bg-slate-200 transition duration-300">
          &#8617; Go back
        </button>
      </Link>
      <Image
        className="rounded-full object-cover"
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
      <h1 className="text-2xl">{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>

      {Object.entries(character).map(([key, value]) => {
        return (
          <p key={key}>
            {key}: {JSON.stringify(value)}
          </p>
        );
      })}
    </div>
  );
};
