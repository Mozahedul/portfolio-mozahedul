import { NextResponse } from "next/server";
import db from "../database/dbconnection/db";
import SubCategory from "../database/models/SubCategory";

/**
 * @param {*} request
 * @method GET
 * @returns the list of subcategories
 * @description search the specific subcateories according to the query parameters named category name
 */

// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("categorysearch");
  console.log(category);

  try {
    await db();
    const subcats = await SubCategory.find({ category });
    console.log("SUBCATEGORIES ==> ", subcats);
    return new NextResponse(JSON.stringify({ subcats }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error in selective subcategory searching ==> ", error);
  }
}
