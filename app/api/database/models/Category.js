import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 40,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
