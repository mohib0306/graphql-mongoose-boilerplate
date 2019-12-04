import { GraphQLID, GraphQLNonNull } from "graphql";
import DeleteTestObjectResult from "../DeleteTestObjectResult";
import TestModel from "../../../mongodb/models/Test";

const deleteTestObject = {
  type: new GraphQLNonNull(DeleteTestObjectResult),
  description: "Delete test object from the dataset",
  args: {
    testObject: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the test object that should be deleted"
    }
  },
  async resolve(parent, { testObject }) {
    return TestModel.findOneAndDelete({ _id: testObject })
      .then(() => ({ success: true, errors: [] }))
      .catch(error => ({
        success: false,
        errors: [new Error(error.message)]
      }));
  }
};

export default deleteTestObject;
