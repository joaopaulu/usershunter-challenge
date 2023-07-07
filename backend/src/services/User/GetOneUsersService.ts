import { getRepository } from "typeorm";
import { User } from "../../entities/User";

export class GetOneUsersService {
  async execute(id: string) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    return user;
  }
}
