import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
import Category from "./Category";

// Create a new Subcategory Shema
const SubCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

//  Create a new SubCategory model
const SubCategory =
  mongoose.models.SubCategoy ||
  mongoose.model("SubCategory", SubCategorySchema);

export default SubCategory;
