import { CreateUserController } from "@controllers/User/CreateUserController";
import { DeleteUserController } from "@controllers/User/DeleteUserController";
import { GetAllUsersController } from "@controllers/User/GetAllUserController";
import { GetOneUsersController } from "@controllers/User/GetOneUserController";
import { UpdateUserController } from "@controllers/User/UpdateUserController";
import { obterLista } from "@controllers/listaController";
import { Router } from "express";

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.get("/users/:id", new GetOneUsersController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);
routes.put("/users/:id", new UpdateUserController().handle);

routes.get("/lista", obterLista);

export { routes };
