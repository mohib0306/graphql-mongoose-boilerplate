import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
import Test from "./Test";
import User from "./User";
import TestModel from "../../mongodb/models/Test";
import UserModel from "../../mongodb/models/User";

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Root query of the graphql server",
  fields: {
    testObject: {
      type: Test,
      description: "Query a tes object using the provided ID",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "ID of the tes object that has to be queried"
        }
      },
      resolve: (parent, args) => {
        return TestModel.findById(args.id)
          .then(testObject => testObject)
          .catch(error => {
            throw error;
          });
      }
    },
    testObjects: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Test))),
      description: "List of all available test objects",
      resolve: () => {
        return TestModel.find()
          .then(testObjects => testObjects)
          .catch(error => {
            throw error;
          });
      }
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(User))),
      description: "List of all available users",
      resolve: () => {
        return UserModel.find()
          .then(users => users)
          .catch(error => {
            throw error;
          });
      }
    }
  }
});

export default Query;
