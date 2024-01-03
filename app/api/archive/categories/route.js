import { NextResponse } from "next/server";
import db from "../../database/dbconnection/db";
import Archive from "../../database/models/Archive";
import { viewImageFromCloudinary } from "@/app/lib/cloudinary/config";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const categoryId = url.searchParams.get("categoryId");

  try {
    await db();
    const archives =
      categoryId &&
      (await Archive.find({ category: categoryId })
        .populate("subcategory", "name")
        .exec());

    if (archives?.length > 0) {
      archives.map((archive, index) => {
        archives[index].image = viewImageFromCloudinary(archive.image);
        return true;
      });

      console.log("ARCHIVES ==> ", archives);

      return new NextResponse(JSON.stringify(archives), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(
      JSON.stringify(JSON.stringify({ errMessage: "Archives not found" }))
    );
  } catch (error) {
    return new NextResponse(JSON.stringify({ errMessage: error.message }), {
      headers: {
        "Content-Type": "appplication/json",
      },
    });
  }
}
