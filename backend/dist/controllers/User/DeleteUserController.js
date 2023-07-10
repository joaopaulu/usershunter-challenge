"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserController = void 0;
var _DeleteUserService = require("@services/User/DeleteUserService");
class DeleteUserController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const userService = new _DeleteUserService.DeleteUserService();
    const result = await userService.execute(id);
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(204).end();
  }
}
exports.DeleteUserController = DeleteUserController;