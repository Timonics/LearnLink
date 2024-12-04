import { Schema, model } from "mongoose";
import { UserModel } from "../../interfaces";

const userSchema: Schema<UserModel> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const User = model<UserModel>("User", userSchema);
export { User };
