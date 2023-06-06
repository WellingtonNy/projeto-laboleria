import { postClient } from "../repositories/clients.repository.js";


export async function postClients(req, res) {

    const { name, address, phone } = req.body;

    try {

        await postClient(name, address, phone);

        res.sendStatus(201);

    } catch (err) {

        res.status(500).send(err.message);

    }
}