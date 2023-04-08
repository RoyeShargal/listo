import { Schema, model, Types } from "mongoose";
import IList from "./list.interface";

const ListSchema = new Schema(
  {
    // email: { type: String },
    name: { type: String },
    authorId: { type: String },
    category: { type: String },
    addedBy: { type: [String] },
    likedBy:{type:[String]}
  },
  { timestamps: true }
);

export default model<IList>("List", ListSchema);
