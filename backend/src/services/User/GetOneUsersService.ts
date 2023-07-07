import { User } from "@entities/User";
import { getRepository } from "typeorm";

export class GetOneUsersService {
  async execute(id: string) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    return user;
  }
}
