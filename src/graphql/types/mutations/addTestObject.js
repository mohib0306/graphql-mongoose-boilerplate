import { GraphQLNonNull } from "graphql";
import AddTestObjectInput from "../../inputs/AddTestObjectInput";
import Test from "../Test";
import TestModel from "../../../mongodb/models/Test";

const addTestObject = {
  type: new GraphQLNonNull(Test),
  description: "Add a new test object to the dataset",
  args: {
    testObject: {
      type: new GraphQLNonNull(AddTestObjectInput),
      description:
        "Input object containing values for creating a new test object"
    }
  },
  async resolve(parent, { testObject }) {
    const { name, description } = testObject;

    const testModel = new TestModel({
      name,
      description
    });
    return testModel
      .save()
      .then(result => result)
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};

export default addTestObject;
