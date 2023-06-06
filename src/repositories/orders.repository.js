import { db } from '../database/database.connection.js';

export function getClientId(clientId) {
    return db.query(`SELECT * FROM clients WHERE id = $1;`, [clientId])
}


export function getCakeId(cakeId) {
    return db.query(`SELECT * FROM cakes WHERE id = $1;`, [cakeId])
}


export function postOrder(clientId, cakeId, quantity, totalPrice) {

    return db.query(`INSERT INTO orders (clientId, cakeId, quantity, createdAt, totalPrice) VALUES ($1,$2,$3,CURRENT_TIMESTAMP,$4);`, [clientId, cakeId, quantity, totalPrice])
}