"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUsersController = void 0;
var _GetAllUsersService = require("@services/User/GetAllUsersService");
class GetAllUsersController {
  async handle(request, response) {
    const {
      page,
      limit,
      first,
      last,
      state
    } = request.query;
    const userService = new _GetAllUsersService.GetAllUsersService();
    const users = await userService.execute(+page + 1, +limit, first, last, state);
    const totalElements = await userService.getTotalElements();
    const totalPages = Math.ceil(totalElements / +limit);
    const currentPage = +page;
    const isFirstPage = currentPage === 0;
    const results = users.map(user => ({
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
    }));
    const responseObj = {
      results,
      totalPages,
      totalElements,
      currentPage,
      first: isFirstPage
    };
    return response.json(responseObj);
  }
}
exports.GetAllUsersController = GetAllUsersController;