import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 80,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    anchor: {
      type: String,
      required: true,
      validate: {
        validator(value) {
          const regex = /^(ftp|http|https):\/\/[^ "]+$/;
          return regex.test(value);
        },
        message: "Invalid URL format",
      },
    },
    language: {
      type: Array,
      required: true,
      minItems: 2,
    },
    description: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 500,
      trim: true,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);

export default Project;
