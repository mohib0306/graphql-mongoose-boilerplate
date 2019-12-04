import { GraphQLID, GraphQLNonNull } from "graphql";
import User from "../User";
import AddUserInput from "../../inputs/AddUserInput";
import UserModel from "../../../mongodb/models/User";

const addUser = {
  type: new GraphQLNonNull(User),
  description: "Add a new user to the dataset",
  args: {
    user: {
      type: new GraphQLNonNull(AddUserInput),
      description: "Input object containing values for creating a new user"
    }
  },
  async resolve(parent, { user }) {
    const { firstName, lastName, email } = user;
    const userModel = new UserModel({
      firstName,
      lastName,
      email
    });
    return userModel
      .save()
      .then(result => result)
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};

export default addUser;
