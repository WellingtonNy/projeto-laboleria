import { getOrderByClientId, postClient, validarClient } from "../repositories/clients.repository.js";


export async function postClients(req, res) {

    const { name, address, phone } = req.body;

    try {

        await postClient(name, address, phone);

        res.sendStatus(201);

    } catch (err) {

        res.status(500).send(err.message);

    }
}


export async function getClients(req, res) {

    const { id } = req.params

    try {

        const valido = await validarClient(id);

        if (!valido.rowCount) return res.status(404).send('Cliente não encontrado')

        const dados = await getOrderByClientId(id);

        const respostaTratada = dados.rows.map((e) => {

            return (

                {
                    "orderId": e.id,
                    "quantity": e.quantity,
                    "createdAt": e.tempo,
                    "totalPrice": e.totalprice,
                    "cakeName": e.cakename
                }
            )
        })

        res.send(respostaTratada)

    } catch (err) {

        res.status(500).send(err.message);

    }

}