import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 40,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.models("Category", CategorySchema);

export default Category;
