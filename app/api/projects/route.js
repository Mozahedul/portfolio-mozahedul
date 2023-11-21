import { NextResponse } from "next/server";
import slugify from "slugify";
import db from "@/app/api/database/dbconnection/db";
import Project from "@/app/api/database/models/Project";

/**
 * @param {*} request
 * @method POST
 * @returns New project created
 * @description New project inserted to database
 */

export async function POST(request) {
  const data = await request.json();

  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await db();
    // check the project exists in db or not
    const slug = slugify(data.title);
    data.slug = slug;
    const isProjectExist = await Project.findOne({ slug });
    if (isProjectExist) {
      return new NextResponse(
        JSON.stringify({ errMsg: "Project Already Exist In DB" }),
        headers
      );
    }
    const newProject = new Project(data);
    const response = await newProject.save();
    console.log(response._doc);
    if (Object.prototype.hasOwnProperty.call(response._doc, "title")) {
      return new NextResponse(
        JSON.stringify({ success: "Project Created Successfully" }),
        headers
      );
    }
  } catch (error) {
    console.log("Error in Project creation==> ", error);
  }
}

/**
 * @param request
 * @method GET
 * @returns fetch all projects
 * @description fetch all projects from database
 */

export async function GET() {
  try {
    await db();
    const projects = await Project.find({}).exec();
    console.log("PROJECTS ==> ", projects);
    return new NextResponse(JSON.stringify({ projects }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error for fetching all project =>", error);
  }
}

/**
 * @param request
 * @method DELETE
 * @returns delete user from db
 */

export async function DELETE(request) {
  const url = new URL(request.url);
  const projectId = url.searchParams.get("projectId");
  console.log(projectId);
  try {
    await db();
    const response = await Project.findByIdAndDelete(projectId);
    if (Object.prototype.hasOwnProperty.call(response._doc, "title")) {
      return new NextResponse(
        JSON.stringify({ success: "Project Deleted Successfully" }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Project is not Deleted" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Error in project delete => ", error);
  }
}

/**
 * @param request
 * @method PUT
 * @returns updated project data from database
 */

export async function PUT(request) {
  const data = await request.json();
  console.log(data);
  try {
    await db();
    const response = await Project.findByIdAndUpdate(data.id, data);

    if (Object.prototype.hasOwnProperty.call(response._doc, "_id")) {
      return new NextResponse(
        JSON.stringify({ success: "Project Updated Successfully" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Project is not updated" }),
      { headers: { "Content-Type": "application/json" } }
    );

    // console.log(response);
  } catch (error) {
    console.log("Error in project update ==>", error);
  }
}
