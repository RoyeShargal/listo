import bcrypt from "bcrypt";

import UsersModel from "./users.model";

class UsersService {
  private users = UsersModel;

  public async registerUser(email: string, password: string) {
    const isUser = (await this.users.findOne({ email }))?._id;
    if (isUser) {
      return { error: "user already exists" };
    } else {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      this.users.create({
        email,
        password: hashedPassword,
      });
      return "user is signed up!";
    }
  }

  public async GetUserById(_id: string) {
    const user = await this.users.findOne({ _id });
    return user ? user : "No user found";
  }

  public async ChangeUserPassword(
    userId: string,
    oldPassword: string,
    newPassword: string,
    newRepeatedPassword: string
  ) {
    // check if user exists =>

    // check if passwords match =>

    // edit user

    // return userId as response.
    return userId;
  }
}

export default UsersService;
