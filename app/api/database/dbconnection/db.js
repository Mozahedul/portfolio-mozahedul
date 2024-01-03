import mongoose from "mongoose";

async function db() {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS);
    console.log("MONGODB DATABASE CONNECTED");
  } catch (error) {
    console.log("ERROR in Database connection", error.message);
  }
}

export default db;
