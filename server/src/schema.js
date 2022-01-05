const { gql } = require('apollo-server');

const typeDefs = gql`
  "A Track is a group of Modules that teaches about a specific topic."
  type Track {
    "The track's unique ID."
    id: ID!
    "The track's title."
    title: String!
    "The track's main author."
    author: Author!
    "The track's main illustration to display in track card or track page detail."
    thumbnail: String
    "The track's approximate length to complete, in minutes."
    length: Int
    "The number of modules this track contains."
    modulesCount: Int
  }

  "Author of a complete Track or a Module."
  type Author {
    "The author's unique ID."
    id: ID!
    "Author's first and last name."
    name: String!
    "Author's profile picture url."
    photo: String
  }

  type Query {
    "Get tracks array for the homepage grid."
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
