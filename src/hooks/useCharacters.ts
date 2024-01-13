'use client';

import {
  CharacterResolvers,
  CharactersResolvers,
} from '@/__generated__/resolvers-types';
import { GET_CHARACTERS, GET_CHARACTER } from '@/lib/gql';
import { ICharacterWithImage } from '@/types/types';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

type UseCharacters = {
  characters: ICharacterWithImage[];
  count: number;
};

export const useCharacters = (): UseCharacters => {
  const { data } = useSuspenseQuery<CharactersResolvers>(GET_CHARACTERS);

  return {
    characters: data?.characters?.results ?? [],
    count: data?.characters?.info?.count ?? 0,
  };
};

export const useCharacter = (id: number): ICharacterWithImage | null => {
  const { data } = useSuspenseQuery<CharacterResolvers>(GET_CHARACTER, {
    variables: { id },
  });

  return data?.character ?? null;
};
