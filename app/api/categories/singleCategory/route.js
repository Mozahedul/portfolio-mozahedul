import { NextResponse } from "next/server";
import db from "../../database/dbconnection/db";
import Category from "../../database/models/Category";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const categoryId = url.searchParams.get("categoryId");
  try {
    await db();
    const headers = {
      headers: { "Content-Type": "application/json" },
    };

    const category = await Category.findById(categoryId);
    return new NextResponse(JSON.stringify(category), headers);
  } catch (error) {
    console.log("Error in category get", error);
  }
}
