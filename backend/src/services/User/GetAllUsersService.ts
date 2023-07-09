import { User } from "@entities/User";
import { FindManyOptions, getRepository, ILike } from "typeorm";

export class GetAllUsersService {
  async execute(
    page: number,
    limit: number,
    first?: string,
    last?: string,
    state?: string
  ): Promise<User[]> {
    const userRepository = getRepository(User);

    const options: FindManyOptions<User> = {
      skip: (page - 1) * limit,
      take: limit,
      where: {},
    };

    if (first) {
      options.where = { first: ILike(`%${first}%`) };
    }

    if (last) {
      options.where = { last: ILike(`%${last}%`) };
    }

    if (state) {
      options.where = { state: ILike(`%${state}%`) };
    }

    const users = await userRepository.find(options);
    return users;
  }

  async getTotalElements(): Promise<number> {
    const userRepository = getRepository(User);

    const totalElements = await userRepository.count();

    return totalElements;
  }
}
