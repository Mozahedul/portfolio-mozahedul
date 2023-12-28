/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import slugify from "slugify";
import Category from "./Category";
import SubCategory from "./SubCategory";

const ArchiveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 500,
    },

    slug: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 1000,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },

    language: [
      {
        type: String,
        required: true,
      },
    ],

    // image: {
    //   type: String,
    //   required: true,
    // },

    anchor: {
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

// Create a slug of title before inserting it into the database
// ArchiveSchema.pre("save", async function (next) {
//   try {
//     this.slug = slugify(this.title, { lower: true });
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

const Archive =
  mongoose.models.Archive || mongoose.model("Archive", ArchiveSchema);

export default Archive;
