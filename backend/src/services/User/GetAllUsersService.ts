import { getRepository } from "typeorm";
import { User } from "../../entities/User";

export class GetAllUsersService {
  async execute() {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return users;
  }
}
