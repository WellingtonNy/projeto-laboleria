import { getCakeId, getClientId, getOrder, postOrder } from "../repositories/orders.repository.js";


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


export async function getOrders(req, res) {

    const {date} = req.query

    try {

        const dados = await getOrder(date)

        const respostaTratada = dados.rows.map((e) => {

            return (
                [
                    {
                        "client": {
                            "id": e.clientid,
                            "name": e.clientName,
                            "address": e.address,
                            "phone": e.phone
                        },
                        "cake": {
                            "id": e.cakeid,
                            "name": e.cakeName,
                            "price": e.price,
                            "description": e.description,
                            "image": e.image
                        },
                        "orderId": e.id,
                        "createdAt": e.tempo,
                        "quantity": e.quantity,
                        "totalPrice": +e.totalprice
                    }
                ])
        })

        res.send(respostaTratada)

    } catch (err) {

        res.status(500).send(err.message)

    }

}