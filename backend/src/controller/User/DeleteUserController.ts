import { Request, Response } from "express";
import { DeleteUserService } from "../../services/User/DeleteUserService";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new DeleteUserService();

    const result = await userService.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
