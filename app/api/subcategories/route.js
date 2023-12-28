import { NextResponse } from "next/server";
import slugify from "slugify";
import db from "../database/dbconnection/db";
import SubCategory from "../database/models/SubCategory";

/**
 * @param {request} request
 * @method POST
 * @description Create a new subcategory after checking if it already in the database
 *  then save into the database
 * @return success response message to the client
 */
export async function POST(request) {
  const formData = await request.json();

  console.log(formData);

  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await db();
    const slug = slugify(formData.name.toLowerCase());
    formData.slug = slug;

    console.log(formData);

    // Check the subcategory exists in the db or not
    const isSubcategoryExists = await SubCategory.findOne({ slug });
    if (isSubcategoryExists) {
      return new NextResponse(
        JSON.stringify({ errMsg: "Subcategory is already in the database" }),
        headers
      );
    }

    const newSubcategory = new SubCategory(formData);
    const response = await newSubcategory.save();

    if (Object.prototype.hasOwnProperty.call(response._doc, "name")) {
      return new NextResponse(
        JSON.stringify({
          success: "Subcategory Created Successfully",
        }),
        headers
      );
    }
  } catch (error) {
    console.log("ERROR in saving subcategory", error);
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
    const subcategories = await SubCategory.find({})
      .populate("category", "name")
      .exec();
    return new NextResponse(JSON.stringify({ subcategories }), headers);
  } catch (error) {
    console.log("ERROR in GET", error);
  }
}

/**
 * @param {string} request
 * @method DELETE
 * @returns send success message after deleting the subcategory from db
 */
export async function DELETE(request) {
  const url = new URL(request.url);
  const subcategoryId = url.searchParams.get("subcategoryId");

  try {
    await db();
    const headers = {
      headers: { "Content-Type": "application/json" },
    };
    const response = await SubCategory.findByIdAndDelete(subcategoryId);
    if (Object.prototype.hasOwnProperty.call(response._doc, "name")) {
      return new NextResponse(
        JSON.stringify({ success: "Subcategory deleted successfully" }),
        headers
      );
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Subcategory not found to delete" }),
      headers
    );
  } catch (error) {
    console.log("ERROR in db", error);
  }
}

/**
 * @param request
 * @method PUT
 * @description Update a subcategory with subcategory id
 * @returns update success message to the client
 */
export async function PUT(request) {
  const data = await request.json();
  data.slug = slugify(data.name.toLowerCase());

  try {
    await db();
    const response = await SubCategory.findByIdAndUpdate(data.id, data);
    if (Object.prototype.hasOwnProperty.call(response._doc, "_id")) {
      return new NextResponse(
        JSON.stringify({ success: "Subcategory Updated Successfully" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Subcategory not updated" }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log("ERROR in PUT request", error);
  }
}
