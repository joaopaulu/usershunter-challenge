import { GetOneUsersService } from "@services/User/GetOneUsersService";
import { Request, Response } from "express";

export class GetOneUsersController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response
        .status(400)
        .json({ message: "ID do usuário não fornecido" });
    }

    const userService = new GetOneUsersService();

    const user = await userService.execute(id);

    if (!user) {
      return response.status(404).json({ message: "Usuário não encontrado" });
    }

    const result = {
      id: user.id,
      name: {
        first: user.first,
        last: user.last,
      },
      location: {
        street: {
          name: user.street,
        },
        city: user.city,
        state: user.state,
        postcode: user.postcode,
      },
      email: user.email,
      phone: user.phone,
      picture: {
        large: user.picture,
      },
    };

    return response.json(result);
  }
}
