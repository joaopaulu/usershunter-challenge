"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserController = void 0;
var _UpdateUserService = require("@services/User/UpdateUserService");
class UpdateUserController {
  async handle(request, response) {
    const {
      id
    } = request.params;
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
    const userService = new _UpdateUserService.UpdateUserService();
    const result = await userService.execute({
      id,
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
exports.UpdateUserController = UpdateUserController;