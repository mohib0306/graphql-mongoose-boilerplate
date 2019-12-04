import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const Error = new GraphQLObjectType({
  name: "Error",
  description: "An object type that wraps an error",
  fields: {
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The human readable message of this error"
    }
  }
});

export default Error;
