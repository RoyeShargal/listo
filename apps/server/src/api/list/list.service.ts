import HttpException from "../../utils/exceptions/http.exception";
import UsersService from "../users/users.service";
import listModel from "./list.model";

class ListService {
  private lists = listModel;
  private usersService = new UsersService();

  public async createList(name: string, authorId: string, category: string) {
    const user = this.usersService.GetUserById(authorId);
    if (!user) return new HttpException(403, "User does not exist");
    // if exists => create new list
    const listCreated = this.lists.create(name, authorId, category);
    console.log("List created: ", listCreated);
    return "list created!";
  }

  // edit list

  // remove list
}
export default ListService;
