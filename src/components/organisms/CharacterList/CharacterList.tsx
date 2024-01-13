'use client';

import { CharacterResolvers } from '@/__generated__/resolvers-types';
import { GET_CHARACTERS } from '@/lib/gql';
import { ICharacter } from '@/types/types';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export const CharacterList = () => {
  const { data } = useSuspenseQuery<CharacterResolvers>(GET_CHARACTERS);

  return (
    <main className="text-center flex flex-col items-center justify-start gap-5 py-10">
      <h1 className="text-3xl font-bold uppercase">Collagerie tech test</h1>

      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />

      {data?.characters?.results?.map((character: ICharacter) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </main>
  );
};
