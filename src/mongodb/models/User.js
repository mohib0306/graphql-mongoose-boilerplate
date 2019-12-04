import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "First name is too short!"]
    },
    lastName: {
      type: String,
      trim: true,
      default: ""
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true,
      minlength: [4, "Email is too short!"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address!"
      ]
    }
  },
  { timestamps: true }
);

export default model("User", UserSchema);

function uniqueEmailValidator(value, respond) {
  return this.model("User")
    .countDocuments({ email: value.trim().toLowerCase() })
    .exec()
    .then(function(count) {
      return !count;
    })
    .catch(function(err) {
      throw err;
    });
}

UserSchema.path("email").validate({
  validator: uniqueEmailValidator,
  message: "User with email => {VALUE} already exists!"
});
