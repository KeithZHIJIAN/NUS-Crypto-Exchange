const { getDb, getNextOrderId } = require('./db.js');


async function orderInit( userId ) {
    const db = getDb();
    const orderCounter = await db.collection('orderCounters')
    orderCounter.remove({ _id: 'order'+String(userId) });
    orderCounter.insert({ _id: 'order'+String(userId), current: 0 });

    return "Successfully Init";
}


async function orderList(_, { userId } ) {
    const db = getDb();
    const orders = await db.collection('orders').find({userId: userId}).toArray();
    return orders;
}


async function orderFind(_, { order }) {
    const userId = order.userId;
    const id = order.id;
    const db = getDb();

    const orderMatch = await db.collection('orders')
        .find({ id: id, userId: userId }).toArray();
    return orderMatch;
}


async function addOrder( order ) {
    const userId = order.userId;
    const db = getDb();

    const newOrder = Object.assign({}, order);
    newOrder.id = await getNextOrderId('order'+String(userId))-1;
    const result = await db.collection('orders').insertOne(newOrder);
    const returnOrder = await db.collection('orders').findOne({ _id: result.insertedId });
    if (returnOrder) {
        return returnOrder;
    }
}


module.exports = { orderInit, orderList, orderFind, addOrder };