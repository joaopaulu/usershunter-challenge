import { DeleteUserService } from "@services/User/DeleteUserService";
import { Request, Response } from "express";

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
