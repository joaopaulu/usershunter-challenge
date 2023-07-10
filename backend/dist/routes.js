"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _CreateUserController = require("@controllers/User/CreateUserController");
var _DeleteUserController = require("@controllers/User/DeleteUserController");
var _GetAllUserController = require("@controllers/User/GetAllUserController");
var _GetOneUserController = require("@controllers/User/GetOneUserController");
var _UpdateUserController = require("@controllers/User/UpdateUserController");
var _listaController = require("@controllers/listaController");
var _express = require("express");
var _swagger = require("./swagger");
const routes = (0, _express.Router)();
exports.routes = routes;
routes.post("/users", new _CreateUserController.CreateUserController().handle);
routes.get("/users", new _GetAllUserController.GetAllUsersController().handle);
routes.get("/users/:id", new _GetOneUserController.GetOneUsersController().handle);
routes.delete("/users/:id", new _DeleteUserController.DeleteUserController().handle);
routes.put("/users/:id", new _UpdateUserController.UpdateUserController().handle);
routes.get("/randomusers", _listaController.obterLista);
(0, _swagger.configureSwagger)(routes);