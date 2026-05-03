import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    dueDate: { type: Date, required: false },
    gender: {type: String, enum: ['boy', 'girl', null], required: false},
		avatar: { type: String, required: false}
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// userSchema.pre("save", function () {
//   if (!this.username) {
//     this.uername = this.email;
//   }
// });

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
export const User = model("User", userSchema);
