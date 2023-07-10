"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserService = void 0;
var _User = require("@entities/User");
var _typeorm = require("typeorm");
class UpdateUserService {
  async execute({
    id,
    first,
    last,
    email,
    picture,
    phone,
    city,
    state,
    street,
    postcode
  }) {
    const userRepository = (0, _typeorm.getRepository)(_User.User);
    const user = await userRepository.findOne(id);
    user.first = first ? first : user.first;
    user.last = last ? last : user.last;
    user.email = email ? email : user.email;
    user.picture = picture ? picture : user.picture;
    user.phone = phone ? phone : user.phone;
    user.city = city ? city : user.city;
    user.state = state ? state : user.state;
    user.street = street ? street : user.street;
    user.postcode = postcode ? postcode : user.postcode;
    await userRepository.save(user);
    return user;
  }
}
exports.UpdateUserService = UpdateUserService;