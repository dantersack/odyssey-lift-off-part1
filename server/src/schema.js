const { gql } = require('apollo-server');

const typeDefs = gql`
  "A Track is a group of Modules that teaches about a specific topic."
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    lenght: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module."
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Get tracks array for the homepage grid."
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
