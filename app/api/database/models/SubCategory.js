import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
import Category from "./Category";

// Create a new Subcategory Shema
const SubCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 100,
    },

    slug: {
      type: String,
      require: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

//  Create a new SubCategory model
const SubCategory =
  mongoose.models.SubCategory ||
  mongoose.model("SubCategory", SubCategorySchema);

export default SubCategory;
