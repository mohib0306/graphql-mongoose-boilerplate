import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from "graphql";

const User = new GraphQLObjectType({
  name: "User",
  description: "An object type holds information about a user",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique identifier of the user"
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The first name of the user"
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The last name of the user"
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user"
    }
  })
});

export default User;
