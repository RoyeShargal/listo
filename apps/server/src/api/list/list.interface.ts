import { Document } from "mongoose";
import { ItemType } from "../../utils/types/ItemType";

export default interface IList extends Document {
  //   email: string;
  //   password: string;
  //   items:ItemType; // TODO: ADD ITEM TYPE
  name: string;
  category: string;
  authorId: string;
  items: ItemType[];
  addedBy: string[];
  likedBy: string[];
}
