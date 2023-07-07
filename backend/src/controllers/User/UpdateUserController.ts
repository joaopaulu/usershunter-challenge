import { UpdateUserService } from "@services/User/UpdateUserService";
import { Request, Response } from "express";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      first,
      last,
      phone,
      picture,
      email,
      city,
      state,
      street,
      postcode,
    } = request.body;

    const userService = new UpdateUserService();

    const result = await userService.execute({
      id,
      first,
      last,
      phone,
      picture,
      email,
      city,
      state,
      street,
      postcode,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
