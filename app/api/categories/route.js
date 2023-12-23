import { NextResponse } from "next/server";
import slugify from "slugify";
import db from "../database/dbconnection/db";
import Category from "../database/models/Category";

/**
 * @param {request} request
 * @method POST
 * @description Create a new category after checking if it already in the database
 *  then save into the database
 * @return success response message to the client
 */
export async function POST(request) {
  const formData = await request.json();

  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await db();
    const slug = slugify(formData.name.toLowerCase());
    formData.slug = slug;

    // Check the category exists in the db or not
    const isCategoryExists = await Category.findOne({ slug });
    if (isCategoryExists) {
      return new NextResponse(
        JSON.stringify({ errMsg: "Category is already in the database" }),
        headers
      );
    }

    const newCategory = new Category(formData);
    const response = await newCategory.save();

    console.log(response);

    if (Object.prototype.hasOwnProperty.call(response._doc, "name")) {
      return new NextResponse(
        JSON.stringify({
          success: "Category Created Successfully",
        }),
        headers
      );
    }
  } catch (error) {
    console.log("ERROR in saving category", error);
  }
}

/**
 * @param request
 * @method GET
 * @returns All the categories from the database
 */
export async function GET() {
  try {
    await db();
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const categories = await Category.find({}).exec();
    return new NextResponse(JSON.stringify({ categories }), headers);
  } catch (error) {
    console.log("ERROR in GET", error);
  }
}

/**
 * @param {string} request
 * @returns successful delete message
 */
export async function DELETE(request) {
  const url = new URL(request.url);
  const categoryId = url.searchParams.get("categoryId");

  try {
    await db();
    const headers = {
      headers: { "Content-Type": "application/json" },
    };
    const response = await Category.findByIdAndDelete(categoryId);
    if (Object.prototype.hasOwnProperty.call(response._doc, "name")) {
      return new NextResponse(
        JSON.stringify({ success: "Category deleted successfully" }),
        headers
      );
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Category not found to delete" }),
      headers
    );
  } catch (error) {
    console.log("ERROR in db", error);
  }
}

/**
 * @param request
 * @method PUT
 * @description Update a category with category id
 * @returns update success message to the client
 */
export async function PUT(request) {
  const data = await request.json();
  data.slug = slugify(data.name.toLowerCase());

  try {
    await db();
    const response = await Category.findByIdAndUpdate(data.id, data);
    if (Object.prototype.hasOwnProperty.call(response._doc, "_id")) {
      return new NextResponse(
        JSON.stringify({ success: "Category Updated Successfully" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Category not updated" }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log("ERROR in PUT request", error);
  }
}
