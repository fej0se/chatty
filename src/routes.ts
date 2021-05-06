import { Router } from "express";
import { MessagesController } from "./controllers/MessagesControllers";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const settingsController = new SettingsController();
const userscontroller = new UsersController();
const messagesController = new MessagesController();

export const routes = Router();

routes.post("/settings", settingsController.create);
routes.post("/users", userscontroller.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser)
