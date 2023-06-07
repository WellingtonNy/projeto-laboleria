import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { getOrders, getOrdersId, postOrders } from "../controllers/orders.controllers.js";
import { ordersSchema } from "../schemas/orders.schemas.js";

const ordersRouter = Router()

ordersRouter.post("/order", validateSchema(ordersSchema), postOrders);
ordersRouter.get("/orders",getOrders);
ordersRouter.get("/orders/:id",getOrdersId);

export default ordersRouter