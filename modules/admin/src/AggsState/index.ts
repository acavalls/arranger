import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

export const createSchema = () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  //   const schema = makeExecutableSchema({ typeDefs });
  addMockFunctionsToSchema({ schema });
  return schema;
};
