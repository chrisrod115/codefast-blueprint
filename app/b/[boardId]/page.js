import mongoose from "mongoose";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { redirect } from "next/navigation";

const getBoard = async (boardId) => {
  // Guard before querying: a malformed id makes Mongoose throw a CastError.
  if (!mongoose.isValidObjectId(boardId)) {
    return null;
  }
  await connectMongo();
  return await Board.findById(boardId);
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;
  const board = await getBoard(boardId);
  if (!board) {
    redirect("/");
  }
  return <main>{board.name} (public)</main>;
}
