/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, balanceDetail, balanceUpdate } = require('./db.js');
const { roundFun } = require('./util.js');
const { typeFind } = require('./types.js');
// const { addHistory } = require('./history.js');
const { addOrder } = require('./order.js');
const { rabbitmqCreate } = require('./rabbitmq.js');

async function walletDetail(_, { userId }) {
    const db = getDb();
    const wallet = await db.collection('wallet').find({ userId: userId }).toArray();
    return wallet;
}



async function walletItemBuy(_, { item }) {
    const userId = item.userId;
    const id = item.id;
    const quantity = item.quantity;
    const type = await typeFind(id);
    const price = item.price == 0 ? type.price : item.price;

    const quantityChange = roundFun(quantity, 5);
    const amount = roundFun(quantityChange * price, 5);
    const nowBalance = await balanceDetail('server', { userId });
    if (nowBalance < amount) {
        return `Do not have enough money! Only have ${nowBalance}, and you can at most buy ${roundFun(nowBalance / price, 5)} ${type.symbol}!`;
    }

    // const newItem = { id: id, symbol: type.symbol, quantity: quantityChange, userId: userId };
    // await walletUpdate(newItem);

    // await addOrder({ id: id, symbol: type.symbol, side: 'buy', quantity: quantityChange, openQuantity: quantityChange, price: price, userId: userId, filledCost: 0 });

    // await balanceUpdate(userId, -amount);
    // const balance = await balanceDetail('server', { userId });

    // const history = { userId: userId, balance: balance };
    // await addHistory("server", { history });

    await rabbitmqCreate({ userId: userId, msg: `add ${type.symbol} ${item.price == 0 ? 'market' : 'limit'} bid ${quantity} ${price} ${userId}` });

    return `You have placed a bid order of ${quantityChange} ${type.symbol} at ${price == 0 ? 'market price' : 'price ' + price}!`;
}

async function walletItemSell(_, { item }) {

    const { userId, id, quantity } = item;
    const type = await typeFind(id);
    const price = item.price == 0 ? type.price : item.price;

    // const newItem = { userId: userId, id: id, symbol: type.symbol, quantity: -quantity };
    // await walletUpdate(newItem);

    // const amount = roundFun(quantity * price, 5);
    // await balanceUpdate(userId, amount);
    // const balance = await balanceDetail('server', { userId });

    // await addOrder({ id: id, symbol: type.symbol, side: 'sell', quantity: quantityChange, openQuantity: quantityChange, price: price, userId: userId, filledCost: 0 });

    // const history = { userId: userId, balance: balance };
    // await addHistory("server", { history });


    await rabbitmqCreate({ userId: userId, msg: `add ${type.symbol} ${item.price == 0 ? 'market' : 'limit'} ask ${quantity} ${price} ${userId}` });

    return `You have placed an ask order of ${quantity} ${type.symbol} at ${price == 0 ? 'market price' : 'price ' + price}!`;
}

async function walletItemConvert(_, { item }) {
    // Convert equals to one buy operation and one sell operation
    const { userId, idFrom, idTo, quantity } = item;
    const typeFrom = await typeFind(idFrom);
    const priceFrom = typeFrom.price;
    // const newItemFrom = { userId: userId, id: idFrom, symbol: typeFrom.symbol, quantity: -quantity };
    // const amountFrom = roundFun(quantity * priceFrom, 5);
    // await walletUpdate(newItemFrom);
    // await addOrder({ userId: userId, currentState: 'SELL', symbol: typeFrom.symbol, quantity: quantity, price: priceFrom, amount: amountFrom });

    await rabbitmqCreate({ userId: userId, msg: `add ${typeFrom.symbol} market ask ${quantity} ${priceFrom} ${userId}` });

    const typeTo = await typeFind(idTo);
    const priceTo = typeTo.price;
    const quantityChange = roundFun(quantity * priceFrom / priceTo, 5);
    // const newItemTo = { userId: userId, id: idTo, symbol: typeTo.symbol, quantity: quantityChange };
    // await walletUpdate(newItemTo);
    // await addOrder({ userId: userId, currentState: 'BUY', symbol: typeTo.symbol, quantity: quantity, price: priceTo, amount: amountFrom });

    await rabbitmqCreate({ userId: userId, msg: `add ${typeFrom.symbol} market bid ${quantity} ${priceFrom} ${userId}` });

    // const balance = await balanceDetail('server', { userId });
    // const history = { userId: userId, balance: balance };
    // await addHistory("server", { history });

    return `You convert ${quantity} ${typeFrom.symbol} to ${quantityChange} ${typeTo.symbol}!`;
}

module.exports = { walletDetail, walletItemBuy, walletItemSell, walletItemConvert };