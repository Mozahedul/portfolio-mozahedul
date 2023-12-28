import { NextResponse } from "next/server";
import slugify from "slugify";
import db from "../database/dbconnection/db";
import Archive from "../database/models/Archive";

/**
 *
 * @param {*} request
 * @method POST
 * @returns Archive insertion success message to the client
 */
export async function POST(request) {
  const data = await request.json();
  const slug = slugify(data.title.toLowerCase());
  data.slug = slug;

  const headers = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    await db();

    // Check if the archive is already exists in the database
    const isArchiveExist = await Archive.findOne({ slug });

    if (isArchiveExist) {
      return new NextResponse(
        JSON.stringify({ errMsg: "Archive already exist in the database" }),
        headers
      );
    }
    // Save data into database
    const newArchive = new Archive(data);
    const archive = await newArchive.save();

    if (Object.prototype.hasOwnProperty.call(archive._doc, "title")) {
      return new NextResponse(
        JSON.stringify({ success: "Archive Inserted Successfully" }),
        headers
      );
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param request
 * @method  GET
 * @returns all the archives from database
 */

export async function GET() {
  try {
    await db();
    const archives = await Archive.find({})
      .populate("category", "name")
      .populate("subcategory", "name")
      .exec();
    console.log(archives);
    return new NextResponse(JSON.stringify({ archives }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error In getting archives");
  }
}

/**
 * @param {request}
 * @method DELETE
 * @returns delete success message
 */
export async function DELETE(request) {
  const url = new URL(request.url);
  const archiveId = url.searchParams.get("archiveId");
  console.log(archiveId);
  try {
    await db();
    const isArchiveDelete = await Archive.findByIdAndDelete(archiveId);
    if (Object.prototype.hasOwnProperty.call(isArchiveDelete._doc, "title")) {
      return new NextResponse(
        JSON.stringify({ success: "Archive deleted successfully" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new NextResponse(JSON.stringify({ errMsg: "Archive not found" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error deleting", error);
  }
}

/**
 * @params request
 * @return update success message to the client
 * @description The archive will update with id
 */

export async function PUT(request) {
  const data = await request.json();
  console.log(data);
  try {
    await db();
    const response = await Archive.findByIdAndUpdate(data?.id, data);

    if (Object.prototype.hasOwnProperty.call(response._doc, "title")) {
      return new NextResponse(
        JSON.stringify({ success: "Archive Updated Successfully" }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new NextResponse(JSON.stringify({ errMsg: "Arcive not found" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
