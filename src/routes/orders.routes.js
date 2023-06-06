import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { postOrders } from "../controllers/orders.controllers.js";
import { ordersSchema } from "../schemas/orders.schemas.js";

const ordersRouter = Router()

ordersRouter.post("/order", validateSchema(ordersSchema), postOrders);

export default ordersRouter