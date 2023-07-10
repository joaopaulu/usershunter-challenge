"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserService = void 0;
var _User = require("@entities/User");
var _typeorm = require("typeorm");
class CreateUserService {
  async execute({
    first,
    last,
    phone,
    picture,
    email,
    city,
    state,
    street,
    postcode
  }) {
    const userRepository = (0, _typeorm.getRepository)(_User.User);
    if (await userRepository.findOne({
      email
    })) {
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
      postcode
    });
    await userRepository.save(user);
    return user;
  }
}
exports.CreateUserService = CreateUserService;