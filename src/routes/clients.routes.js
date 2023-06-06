import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { clientsSchema } from "../schemas/clients.schemas.js"
import { postClients } from "../controllers/clients.controllers.js"

const clientsRouter = Router()

clientsRouter.post("/clients", validateSchema(clientsSchema), postClients);

export default clientsRouter
