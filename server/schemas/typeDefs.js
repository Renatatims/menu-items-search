const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    favorites: [Food]
  }

  type Food {
    foodId: ID!
    name: String
    image: String
    restaurant: String
    calories: Int
    carbs: Int
    fat: Int
    protein: Int
  }

  input FoodInput {
    foodId: ID!
    name: String
    image: String
    restaurant: String
    calories: Int
    carbs: Int
    fat: Int
    protein: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    saveFood(foodData: FoodInput!): User
    removeFood(foodId: ID!): User
  }
`;
module.exports = typeDefs;
