import { GraphQLObjectType } from "graphql";
import addTestObject from "./mutations/addTestObject";
import deleteTestObject from "./mutations/deleteTestObject";
import addUser from "./mutations/addUser";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation type",
  fields: {
    addUser,
    addTestObject,
    deleteTestObject
  }
});

export default Mutation;
