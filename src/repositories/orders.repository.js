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


export function getOrder(date) {

    let query = `SELECT  orders.id, orders.clientId ,orders.cakeId,orders.quantity, TO_CHAR(orders.createdAt, 'YYYY-MM-DD HH24:MI') AS tempo ,orders.totalPrice,clients.name AS "clientName"
    , clients.address ,clients.phone, cakes.name AS "cakeName",cakes.price, cakes.image , cakes.description
    FROM orders
    JOIN
      clients ON orders.clientId = clients.id
    JOIN
      cakes ON orders.cakeId = cakes.id
    WHERE 1=1`

    let queryComplementar = `;`

    const valor = [];

    if (date) {

        valor.push(date)

        queryComplementar = `AND TO_CHAR(orders.createdAt, 'YYYY-MM-DD') = $${valor.length};`

    }


    return db.query(query + queryComplementar, valor)
}


export function getOrderById(id) {

    return db.query(`SELECT  orders.id, orders.clientId ,orders.cakeId,orders.quantity, TO_CHAR(orders.createdAt, 'YYYY-MM-DD HH24:MI') AS tempo ,orders.totalPrice,clients.name AS "clientName"
    , clients.address ,clients.phone, cakes.name AS "cakeName",cakes.price, cakes.image , cakes.description
    FROM orders
    JOIN
      clients ON orders.clientId = clients.id
    JOIN
      cakes ON orders.cakeId = cakes.id
    WHERE orders.id = $1;`, [id])
}