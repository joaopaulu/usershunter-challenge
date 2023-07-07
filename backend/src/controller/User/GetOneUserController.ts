import { Request, Response } from "express";
import { GetOneUsersService } from "../../services/User/GetOneUsersService";

export class GetOneUsersController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new GetOneUsersService();

    const result = await userService.execute(id);

    return response.json(result);
  }
}