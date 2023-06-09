import joi from "joi"

export const cakesSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().positive().required(),
    image: joi.string().regex(/\.com/).required(),
    description: joi.string()
})
