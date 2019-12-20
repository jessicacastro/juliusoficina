import { Router } from "express";

import SessionController from "./app/controllers/SessionController";
import ClientController from "./app/controllers/ClientController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

// ROTA TESTE
routes.get("/teste", (req, res) => {
  return res.status(200).json({ message: "backend works - julius!" });
});

// ROTA DE LOGIN SEM AUTH
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post("/clients", ClientController.store);
routes.put("/clients/update", ClientController.update);

export default routes;
