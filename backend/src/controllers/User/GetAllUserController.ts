import { User } from "@entities/User";
import { GetAllUsersService } from "@services/User/GetAllUsersService";
import { Request, Response } from "express";

export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const { page, limit, first, last, state } = request.query as {
      page: string;
      limit: string;
      first: string;
      last: string;
      state: string;
    };
    const userService = new GetAllUsersService();

    const users: User[] = await userService.execute(
      +page + 1, // Adicione +1 para ajustar a página atual
      +limit,
      first,
      last,
      state
    );

    const totalElements = await userService.getTotalElements();
    const totalPages = Math.ceil(totalElements / +limit);
    const currentPage = +page;
    const isFirstPage = currentPage === 0;

    const results = users.map((user) => ({
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
    }));

    const responseObj = {
      results,
      totalPages,
      totalElements,
      currentPage,
      first: isFirstPage,
    };

    return response.json(responseObj);
  }
}
