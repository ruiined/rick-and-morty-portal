import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page, filter: { status: "Alive", name: "Morty" }) {
      info {
        count
        pages
      }
      results {
        id
        name
        species
        gender
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      image
      episode {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`;
