import { NextResponse } from "next/server";
import db from "../../database/dbconnection/db";
import SubCategory from "../../database/models/SubCategory";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const categoryId = url.searchParams.get("categoryId");

  console.log(categoryId);

  try {
    await db();
    const headers = {
      headers: { "Content-Type": "application/json" },
    };

    const subcategory =
      categoryId &&
      (await SubCategory.find({
        category: categoryId,
      }).exec());

    if (subcategory) {
      return new NextResponse(JSON.stringify(subcategory), headers);
    }
    return new NextResponse(
      JSON.stringify({ errMessage: "No Subcategory found" }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new NextResponse(JSON.stringify({ errMessage: error.message }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
