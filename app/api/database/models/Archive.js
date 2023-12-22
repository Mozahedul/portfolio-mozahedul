import mongoose from "mongoose";

const ArchiveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 100,
      unique: true,
    },

    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 1000,
    },

    category: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },

    externallink: {
      type: String,
      required: true,
    },

    github: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Archive =
  mongoose.models.Archive || mongoose.model("Archive", ArchiveSchema);

export default Archive;
