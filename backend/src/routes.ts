import { Router } from "express";
import { CreateUserController } from "./controller/User/CreateUserController";
import { DeleteUserController } from "./controller/User/DeleteUserController";
import { GetAllUsersController } from "./controller/User/GetAllUserController";
import { GetOneUsersController } from "./controller/User/GetOneUserController";
import { UpdateUserController } from "./controller/User/UpdateUserController";

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.get("/users/:id", new GetOneUsersController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);
routes.put("/users/:id", new UpdateUserController().handle);

export { routes };
