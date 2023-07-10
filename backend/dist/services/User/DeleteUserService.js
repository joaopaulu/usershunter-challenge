"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserService = void 0;
var _User = require("@entities/User");
var _typeorm = require("typeorm");
class DeleteUserService {
  async execute(id) {
    const userRepository = (0, _typeorm.getRepository)(_User.User);
    if (!(await userRepository.findOne(id))) {
      return new Error("User does not exists!");
    }
    return userRepository.delete(id);
  }
}
exports.DeleteUserService = DeleteUserService;