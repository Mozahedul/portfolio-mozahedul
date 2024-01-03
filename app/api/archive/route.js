import { NextResponse } from "next/server";
import slugify from "slugify";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";
import db from "../database/dbconnection/db";
import Archive from "../database/models/Archive";
import uploadImageToCloudinary, {
  deleteCloudinaryImage,
  viewImageFromCloudinary,
} from "@/app/lib/cloudinary/config";

/**
 *
 * @param {*} request
 * @method POST
 * @returns Archive insertion success message to the client
 */
export async function POST(request) {
  const data = await request.formData();
  console.log(data);
  const file = data.get("image");
  const title = data.get("archiveTitle");
  const anchor = data.get("anchor");
  const github = data.get("github");
  const description = data.get("description");
  const language = data.get("language");
  const category = data.get("category");
  const subcategory = data.get("subcategory");

  const slug = slugify(title.toLowerCase());

  // Extranct stream data to binary data
  const bytes = await file.arrayBuffer();

  // convert the ArrayBuffer to buffer object
  const bufferObj = Buffer.from(bytes);

  // Save this buffer object to file system
  const filePath = path.join(process.cwd(), "tmp", file.name);
  await writeFile(filePath, bufferObj);

  const imagePublicId = await uploadImageToCloudinary(filePath);

  // Create an object to send to the database
  const archive = {
    title,
    slug,
    anchor,
    github,
    description,
    category,
    subcategory,
    language: language.split(","),
    image: imagePublicId,
  };
  console.log(archive);

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

    if (imagePublicId) {
      // Save data into database
      const newArchive = new Archive(archive);
      const archiveData = await newArchive.save();

      if (Object.prototype.hasOwnProperty.call(archiveData._doc, "title")) {
        // remove the image file from local tmp folder
        fs.unlinkSync(filePath);
        // Send success message to the client
        return new NextResponse(
          JSON.stringify({ success: "Archive Inserted Successfully" }),
          headers
        );
      }
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Archive is not inserted" }),
      headers
    );
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

    archives.map((archive, index) => {
      const imageUrl = viewImageFromCloudinary(archive.image);
      archives[index].image = imageUrl;
      return true;
    });

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

  try {
    await db();
    const isArchiveDelete = await Archive.findByIdAndDelete(archiveId);

    if (Object.prototype.hasOwnProperty.call(isArchiveDelete._doc, "title")) {
      // Delete image from cloudinary
      deleteCloudinaryImage(isArchiveDelete.image);
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
 * @method PUT
 * @return update success message to the client
 * @description The archive will update with id
 */
export async function PUT(request) {
  const formData = await request.formData();

  console.log(formData);

  const archive = {
    title: formData.get("title"),
    anchor: formData.get("anchor"),
    github: formData.get("github"),
    description: formData.get("description"),
    category: formData.get("category"),
    subcategory: formData.get("subcategory"),
    language: formData.get("language").split(","),
  };

  /**
   * Image saved to local file system and then get the image
   * from the local file system and upload to cloudinary,
   * save to an object and then the object sent to database
   */
  const file = formData.get("image");
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "tmp", file.name);
    await writeFile(filePath, buffer);

    const imgFromCloudinary =
      filePath && (await uploadImageToCloudinary(filePath));
    archive.image = imgFromCloudinary;

    // Delete the image from local file system
    file && fs.unlinkSync(path.join(process.cwd(), "tmp", file.name));

    // Delete the image from the cloudinary
    const publicId = formData.get("publicId");
    console.log(publicId);
    await deleteCloudinaryImage(publicId);
  }

  console.log(archive);
  const id = formData.get("id");

  try {
    await db();
    const response = await Archive.findByIdAndUpdate(id, archive);

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
    console.log(error.message);
  }
}
