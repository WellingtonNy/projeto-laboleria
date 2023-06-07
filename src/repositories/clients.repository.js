import { db } from '../database/database.connection.js';

export function postClient(name, address, phone) {
    return db.query(`INSERT INTO clients ("name", "address", "phone") VALUES ($1, $2, $3);`, [name, address, phone])
}


export function getOrderByClientId(id) {

    return db.query(`SELECT  orders.id,orders.quantity, TO_CHAR(orders.createdAt, 'YYYY-MM-DD HH24:MI') AS tempo ,orders.totalPrice,cakes.name AS "cakeName"
    FROM orders
    JOIN cakes ON orders.cakeId = cakes.id
	WHERE orders.clientId = $1;`, [id])

}


export function validarClient(id) {
    return db.query(`SELECT * FROM clients WHERE clients.id = $1`,[id])
}