import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { cakesSchema } from "../schemas/cakes.schemas.js"
import { postCakes } from "../controllers/cakes.controllers.js"

const cakesRouter = Router()

cakesRouter.post("/cakes", validateSchema(cakesSchema), postCakes);

export default cakesRouter;