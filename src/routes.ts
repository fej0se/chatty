import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const settingsController = new SettingsController();

export const routes = Router();

routes.post("/settings", settingsController.create)