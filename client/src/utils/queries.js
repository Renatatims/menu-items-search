import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      favorites {
        foodId
        name
        image
        restaurant
        calories
        carbs
        fat
        protein
      }    
    }
  }
`;
