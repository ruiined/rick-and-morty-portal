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

type UseCharacter = {
  name: string;
  image: string;
  description: string[][];
  location: string[][];
  episodes: string[][];
};

export const useCharacter = (id: number): UseCharacter => {
  const { data } = useSuspenseQuery<CharacterResolvers>(GET_CHARACTER, {
    variables: { id },
  });

  const residentCount = data?.character?.location?.residents?.length;

  const character = data?.character;

  const description = [
    ['Status', character.status],
    ['Origin', character.origin.name],
  ];

  const location = [
    ['Name', character.location.name],
    ['Type', character.location.type],
    ['Dimension', character.location.dimension],
    ['Residents', residentCount],
  ];

  const firstAppearance = character.episode[0];
  const lastAppearance = character.episode.at(-1);

  const episodes = [
    ['First appearance', firstAppearance.name],
    ['First appearance air date', firstAppearance.air_date],
    ['First appearance character count', firstAppearance.characters.length],
    ['Last appearance', lastAppearance.name],
    ['Last appearance air date', lastAppearance.air_date],
    ['Last appearance character count', lastAppearance.characters.length],
  ];

  return {
    name: character.name,
    image: character.image,
    description,
    location,
    episodes,
  };
};
