const app = require("./app");

const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("../graphql/typeDef");
const resolvers = require("../graphql/resolvers");

const startApolloServer = async (PORT) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
};

module.exports = startApolloServer;
