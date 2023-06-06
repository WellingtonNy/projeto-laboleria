import { getCakeByName, postCake } from "../repositories/cakes.repository.js";


export async function postCakes(req, res) {

 const { name, price, image, description } = req.body;

    try {

        const cake = await getCakeByName(name)

        if (cake.rows.length !== 0) return res.status(409).send('Nome do bolo já cadastrado')

        await postCake(name, price, image, description)

        res.sendStatus(201);

    } catch (err) {

        res.status(500).send(err.message)

    }
}