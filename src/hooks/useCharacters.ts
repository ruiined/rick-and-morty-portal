'use client';

import { CharacterResolvers } from '@/__generated__/resolvers-types';
import { GET_CHARACTERS } from '@/lib/gql';
import { ICharacter } from '@/types/types';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

type UseCharacters = { characters: ICharacter[]; count: number };

export const useCharacters = (): UseCharacters => {
  const { data } = useSuspenseQuery<CharacterResolvers>(GET_CHARACTERS);

  return {
    characters: data?.characters?.results ?? [],
    count: data?.characters?.info?.count ?? 0,
  };
};
