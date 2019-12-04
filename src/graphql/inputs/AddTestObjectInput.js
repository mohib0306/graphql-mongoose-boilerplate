import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AddTestObjectInput = new GraphQLInputObjectType({
  name: "AddTestObjectInput",
  description: "A collection of properties for a new test object",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the test object"
    },
    description: {
      type: GraphQLString,
      description: "The general information about the test object"
    }
  }
});

export default AddTestObjectInput;
