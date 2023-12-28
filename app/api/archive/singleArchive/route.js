import { NextResponse } from "next/server";
import db from "../../database/dbconnection/db";
import Archive from "../../database/models/Archive";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const archiveId = url.searchParams.get("archiveId");
  try {
    await db();
    const archive = await Archive.findById(archiveId)
      .populate("category", "name")
      .populate("subcategory", "name")
      .exec();
    return new NextResponse(JSON.stringify(archive), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
