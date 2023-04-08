import { Schema, model } from "mongoose";
import EverythingArticlesI from "./users.interface";

const UsersSchema = new Schema(
  {
    email: { type: String },
    name: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

export default model<EverythingArticlesI>("User", UsersSchema);
