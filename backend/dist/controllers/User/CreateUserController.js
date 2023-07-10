"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;
var _CreateUserService = require("@services/User/CreateUserService");
class CreateUserController {
  async handle(request, response) {
    const {
      first,
      last,
      phone,
      picture,
      email,
      city,
      state,
      street,
      postcode
    } = request.body;
    const userService = new _CreateUserService.CreateUserService();
    const result = await userService.execute({
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
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
exports.CreateUserController = CreateUserController;