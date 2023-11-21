import { NextResponse } from "next/server";
import db from "../../database/dbconnection/db";
import User from "../../database/models/User";

/**
 * @param request
 * @method DELETE
 * @return Delete the user
 * @description Delete all the users from db
 */
// eslint-disable-next-line import/prefer-default-export
export async function DELETE() {
  try {
    db();
    const response = await User.deleteMany({});
    if (response.acknowledged) {
      return new NextResponse(
        JSON.stringify({ success: "All Data Deleted Successfully" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new NextResponse(
      JSON.stringify({ errMsg: "Data is not deleted yet!" }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error);
  }
}
