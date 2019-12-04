import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList
} from "graphql";
import ErrorType from "./Error";

const DeleteTestObjectResult = new GraphQLObjectType({
  name: "DeleteTestObjectResult",
  description: "Mutation result of the deleteTestObject mutation",
  fields: {
    success: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description:
        "This field indicates whether the mutation was successful or not"
    },
    errors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ErrorType))),
      description:
        "A list of user related errors that occurred executing this mutation",
      resolve(parent) {
        if (parent.success) {
          return [];
        }
        return parent.errors.map(error => ({
          message: error.message
        }));
      }
    }
  }
});

export default DeleteTestObjectResult;
