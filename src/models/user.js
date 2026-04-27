import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timeStamps: true,
    versionKey: false,
  },
);

userSchema.pre("save", function () {
  if (!this.username) {
    this.uername = this.email;
  }
});

userSchema.method.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
export const User = model("User", userSchema);
