"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneUsersController = void 0;
var _GetOneUsersService = require("@services/User/GetOneUsersService");
class GetOneUsersController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    if (!id) {
      return response.status(400).json({
        message: "ID do usuário não fornecido"
      });
    }
    const userService = new _GetOneUsersService.GetOneUsersService();
    const user = await userService.execute(id);
    if (!user) {
      return response.status(404).json({
        message: "Usuário não encontrado"
      });
    }
    const result = {
      id: user.id,
      name: {
        first: user.first,
        last: user.last
      },
      location: {
        street: {
          name: user.street
        },
        city: user.city,
        state: user.state,
        postcode: user.postcode
      },
      email: user.email,
      phone: user.phone,
      picture: {
        large: user.picture
      }
    };
    return response.json(result);
  }
}
exports.GetOneUsersController = GetOneUsersController;