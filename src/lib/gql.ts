import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
      }
    }
  }
`;
