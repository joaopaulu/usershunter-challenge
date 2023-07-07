import { User } from "@entities/User";
import { getRepository } from "typeorm";
import { UserRequest } from "types/user";

export class CreateUserService {
  async execute({
    first,
    last,
    phone,
    picture,
    email,
    city,
    state,
    street,
    postcode,
  }: UserRequest): Promise<User | Error> {
    const userRepository = getRepository(User);

    if (await userRepository.findOne({ email })) {
      return new Error("User already exists");
    }

    const user = userRepository.create({
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

    await userRepository.save(user);

    return user;
  }
}
