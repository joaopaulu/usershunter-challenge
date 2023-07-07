import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
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

    const userService = new CreateUserService();

    const result = await userService.execute({
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

