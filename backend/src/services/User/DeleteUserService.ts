import { getRepository } from "typeorm";
import { User } from "../../entities/User";

export class DeleteUserService {
  async execute(id: string) {
    const userRepository = getRepository(User);

    if (!(await userRepository.findOne(id))) {
      return new Error("User does not exists!");
    }

    return userRepository.delete(id);
  }
}
