import { NextResponse } from "next/server";
import db from "../database/dbconnection/db";
import User from "../database/models/User";
// import User from "@/app/api/database/models/User";
// import db from "@/app/api/database/dbconnection/db";

/**
 *
 * @param {*} request
 * @returns user creation success message or error message
 * @method POST
 * @description New user creation
 */
export async function POST(request) {
  const data = await request.json();

  try {
    await db();
    // Check user exis or not in database
    const isUserExist = await User.findOne({ email: data.email });

    console.log("USER EXIST ==> ", isUserExist);

    if (isUserExist) {
      return new NextResponse(
        JSON.stringify({ errMsg: "User Already Exists" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    const newUser = new User(data);
    const response = await newUser.save();
    if (Object.prototype.hasOwnProperty.call(response._doc, "name")) {
      return new NextResponse(
        JSON.stringify({ success: "User Created Successfully" }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.log("Error in USER creation ==> ", error);
  }
}

/**
 * @param request
 * @method GET
 * @return all user data
 * @description Fetch all users from database
 */

export async function GET() {
  try {
    await db();
    const users = await User.find({})
      .sort([["createdAt", "desc"]])
      .exec();
    console.log(users);
    return new NextResponse(JSON.stringify({ users }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param request
 * @method DELETE
 * @return delete a single user
 * @description Delete a single user from db
 */

export async function DELETE(request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  try {
    const response = await User.findByIdAndDelete(userId);
    if (Object.prototype.hasOwnProperty.call(response?._doc, "_id")) {
      return new NextResponse(
        JSON.stringify({ success: "User Deleted Successfully" })
      );
    }
    return new NextResponse(JSON.stringify({ errMsg: "User Not Deleted" }));
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param request
 * @method PUT
 * @returns updated user
 * @description Update the user with id
 */
export async function PUT(request) {
  const data = await request.json();
  console.log(data);
  try {
    await db();
    const response = await User.findByIdAndUpdate(data.id, data);

    console.log(response._doc);
    // send response to client
    if (Object.prototype.hasOwnProperty.call(response._doc, "_id")) {
      return new NextResponse(
        JSON.stringify({ success: "User Updated Successfully" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new NextResponse(JSON.stringify({ success: "User Not Updated" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
