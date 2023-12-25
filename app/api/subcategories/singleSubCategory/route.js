import { NextResponse } from "next/server";
import db from "../../database/dbconnection/db";
import SubCategory from "../../database/models/SubCategory";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const subcategoryId = url.searchParams.get("subcategoryId");
  try {
    await db();
    const headers = {
      headers: { "Content-Type": "application/json" },
    };

    const subcategory = await SubCategory.findById(subcategoryId)
      .populate("category", "name")
      .exec();
    return new NextResponse(JSON.stringify(subcategory), headers);
  } catch (error) {
    console.log("Error in subcategory get", error);
  }
}
