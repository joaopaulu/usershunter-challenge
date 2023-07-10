"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUsersService = void 0;
var _User = require("@entities/User");
var _typeorm = require("typeorm");
class GetAllUsersService {
  async execute(page, limit, first, last, state) {
    const userRepository = (0, _typeorm.getRepository)(_User.User);
    const options = {
      skip: (page - 1) * limit,
      take: limit,
      where: {}
    };
    if (first) {
      options.where = {
        first: (0, _typeorm.ILike)(`%${first}%`)
      };
    }
    if (last) {
      options.where = {
        last: (0, _typeorm.ILike)(`%${last}%`)
      };
    }
    if (state) {
      options.where = {
        state: (0, _typeorm.ILike)(`%${state}%`)
      };
    }
    const users = await userRepository.find(options);
    return users;
  }
  async getTotalElements() {
    const userRepository = (0, _typeorm.getRepository)(_User.User);
    const totalElements = await userRepository.count();
    return totalElements;
  }
}
exports.GetAllUsersService = GetAllUsersService;