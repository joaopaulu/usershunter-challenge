"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneUsersService = void 0;
var _User = require("@entities/User");
var _typeorm = require("typeorm");
class GetOneUsersService {
  async execute(id) {
    const userRepository = (0, _typeorm.getRepository)(_User.User);
    const user = await userRepository.findOne(id);
    return user;
  }
}
exports.GetOneUsersService = GetOneUsersService;