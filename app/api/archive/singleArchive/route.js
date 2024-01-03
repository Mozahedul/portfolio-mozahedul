import { NextResponse } from "next/server";
import db from "../../database/dbconnection/db";
import Archive from "../../database/models/Archive";
import { viewImageFromCloudinary } from "@/app/lib/cloudinary/config";

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

    // This is used to send public_id so that
    // we can delete image from the database
    const pubId = archive.image;
    archive._doc.publicId = pubId;
    // View image from cloudinary by sending image public_id
    const imageUrl = viewImageFromCloudinary(archive.image);
    archive.image = imageUrl;

    console.log(archive);

    return new NextResponse(JSON.stringify(archive), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
