import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 48,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 24,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default User;
