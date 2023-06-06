import { getCakeId, getClientId, postOrder } from "../repositories/orders.repository.js";


export async function postOrders(req, res) {

    const { clientId, cakeId, quantity, totalPrice } = req.body;

    try {

        const client = await getClientId(clientId)

        if (client.rows.length !== 1) return res.status(404).send('Cliente não encontrado')

        const cake = await getCakeId(cakeId)

        if (cake.rows.length !== 1) return res.status(404).send('Bolo não encontrado')

        await postOrder(clientId, cakeId, quantity, totalPrice)

        res.sendStatus(201);

    } catch (err) {

        res.status(500).send(err.message)

    }
}
