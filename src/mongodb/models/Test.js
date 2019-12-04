import { Schema, model } from "mongoose";

const TestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true,
      minlength: [3, "Name is too short!"]
    },
    description: {
      type: String,
      trim: true,
      default: ""
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null
    }
  },
  { timestamps: true }
);

export default model("Test", TestSchema);
