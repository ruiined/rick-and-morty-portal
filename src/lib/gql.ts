import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page, filter: { status: "Alive" }) {
      info {
        count
        pages
        next
        prev
      }
      results {
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
        }
        image
        episode {
          id
          name
          air_date
          episode
        }
      }
    }
  }
`;
