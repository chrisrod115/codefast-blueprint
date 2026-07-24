import mongoose from "mongoose";
const boardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    requred: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});
export default mongoose.model.Board || mongoose.model("Board", boardSchema);
