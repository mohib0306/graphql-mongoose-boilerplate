import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from "graphql";
import User from "./User";

const Test = new GraphQLObjectType({
  name: "Test",
  description: "An object type holds information about a test object",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique identifier of the test object"
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the test object"
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Some general information about the test object"
    }
  })
});

export default Test;
