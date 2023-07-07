import { User } from "@entities/User";
import { getRepository } from "typeorm";

export class DeleteUserService {
  async execute(id: string) {
    const userRepository = getRepository(User);

    if (!(await userRepository.findOne(id))) {
      return new Error("User does not exists!");
    }

    return userRepository.delete(id);
  }
}
