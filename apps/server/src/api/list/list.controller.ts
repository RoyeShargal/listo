import { Request, Response, Router, NextFunction } from "express";

import Controller from "../../utils/interfaces/controller.interface";
import { logger } from "../../../src/config/logger";
import ListService from "./list.service";

export class ListsController implements Controller {
  public path = "/lists";
  public router = Router();
  private ListsService = new ListService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(`${this.path}/create`, this.createList);
    // this.router.post(`${this.path}/signup`, this.signUpUser);
    // this.router.put(`${this.path}/changepassword`, this.changeUserPassword);
  }

  private createList = async (
    req: Request<{}, {}, { authorId: string; name: string; category: string }>,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { authorId, name, category } = req.body;
      const response = await this.ListsService.createList(
        authorId,
        name,
        category
      );
      logger.info(`called sign up user, body: ${req.body}`);
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  };
}
