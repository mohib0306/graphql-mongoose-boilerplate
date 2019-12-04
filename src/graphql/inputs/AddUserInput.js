import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AddUserInput = new GraphQLInputObjectType({
  name: "AddUserInput",
  description: "A collection of properties for a new user",
  fields: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The first name of the User"
    },
    lastName: {
      type: GraphQLString,
      description: "The last name of the User"
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user"
    }
  }
});

export default AddUserInput;
