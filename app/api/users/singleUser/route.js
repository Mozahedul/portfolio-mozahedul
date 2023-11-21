import { NextResponse } from "next/server";
import User from "../../database/models/User";
import db from "../../database/dbconnection/db";
// import db from "@/app/api/database/dbconnection/db";
// import User from "@/app/api/database/models/User";

/**
 * @param request
 * @method GET
 * @returns a single user info
 * @description full info of a single user
 */
// eslint-disable-next-line import/prefer-default-export
export async function GET(request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  try {
    await db();
    const response = await User.findById(userId).exec();

    if (Object.prototype.hasOwnProperty.call(response._doc, "_id")) {
      return new NextResponse(JSON.stringify(response._doc));
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "No user found in database" })
    );
  } catch (error) {
    console.log(error);
  }
}
