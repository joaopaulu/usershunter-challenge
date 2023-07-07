import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/User/GetAllUsersService";

export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const userService = new GetAllUsersService();

    const users = await userService.execute();

    return response.json(users);
  }
}
