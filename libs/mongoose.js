import mongoose from "mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Re-throw so callers fail loudly instead of querying a dead connection.
    throw error;
  }
};
export default connectMongo;
