'use client';
import { useCharacter, useCharacters } from '@/hooks/useCharacters';
import { Card, Grid } from '../molecules';
import Image from 'next/image';
import Link from 'next/link';

export const CharacterProfile = ({ id }: { id: string }) => {
  // console.log(Number(id));
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
      <div className="p-4">
        <p>Name: {character.name}</p>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
      </div>
    </div>
  );
};
