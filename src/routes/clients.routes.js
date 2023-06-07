import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { clientsSchema } from "../schemas/clients.schemas.js"
import { getClients, postClients } from "../controllers/clients.controllers.js"

const clientsRouter = Router()

clientsRouter.post("/clients", validateSchema(clientsSchema), postClients);
clientsRouter.get("/clients/:id/orders",getClients);

export default clientsRouter
