import { NextResponse } from "next/server";
import db from "@/app/api/database/dbconnection/db";
import Project from "@/app/api/database/models/Project";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const projectId = url.searchParams.get("projectId");
  console.log(projectId);
  try {
    await db();
    const response = await Project.findById(projectId);
    return new NextResponse(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error in single project fetching ==> ", error);
  }
}
