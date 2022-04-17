/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, balanceDetail, balanceUpdate } = require('./db.js');
const { roundFun } = require('./util.js');
const { typeFind } = require('./types.js');
const { addHistory } = require('./history.js');
const { addOrder } = require('./order.js');
const { rabbitmqCreate } = require('./rabbitmq.js');

async function walletDetail( _, { userId } ) {
    const db = getDb();
    const wallet = await db.collection('wallet').find({userId: userId}).toArray();
    return wallet;
}

async function walletItemFind( userId, id ) {
    const db = getDb();

    const walletItemMatch = await db.collection('wallet')
        .findOne({ userId: userId, id: id });
    return walletItemMatch;
}

async function walletUpdate( item ) {
    const db = getDb();
    const itemMatch = await walletItemFind(item.userId, item.id);
    if ( itemMatch == null ) {
        await db.collection('wallet').insertOne(item);
        return item.quantity;
    } else {
        const wallet = await db.collection('wallet').findOneAndUpdate(
            { id: item.id, userId: item.userId },
            { $inc: { quantity: item.quantity } },
            { returnOriginal: false },
        );
        if (wallet.value.quantity == 0) {
            await db.collection('wallet').deleteOne( { id: item.id, userId: item.userId });
        }
        return wallet.value.quantity;
    }
}

async function walletItemBuy(_, { item }) {
    const userId = item.userId;
    const id = item.id;
    const quantity = item.quantity;
    const type = await typeFind( id );
    const price = item.price == 0? type.price : item.price;

    const quantityChange = roundFun(quantity, 5);
    const amount = roundFun(quantityChange*price, 5);
    const nowBalance = await balanceDetail( 'server', { userId } );
    if (nowBalance < amount) {
        return `Do not have enough money! Only have ${nowBalance}, and you can at most buy ${roundFun(nowBalance/price, 5)} ${type.symbol}!`;
    }

    const newItem = {userId: userId, id: id, symbol: type.symbol, quantity: quantityChange};
    await walletUpdate(newItem);

    await addOrder({ userId: userId, currentState: 'BUY', symbol: type.symbol, quantity: quantityChange, price: price, amount: amount });

    await balanceUpdate(userId, -amount);
    const balance = await balanceDetail( 'server', { userId } );

    const history = { userId: userId, balance: balance };
    await addHistory("server", { history });

    await rabbitmqCreate( { userId: userId, msg: `BUY,${type.symbol},${item.price == 0? 'Limit' : 'Market'},ask,${quantity},${price}` });

    return `You have bought ${quantityChange} ${type.symbol}!`;
}

async function walletItemSell(_, { item }) {

    const {userId, id, quantity} = item;
    const type = await typeFind( id );
    const price = type.price;

    const newItem = {userId: userId, id: id, symbol: type.symbol, quantity: -quantity};
    await walletUpdate( newItem );

    const amount = roundFun(quantity*price, 5);
    await balanceUpdate( userId, amount );
    const balance = await balanceDetail( 'server', { userId } );

    await addOrder({ userId: userId, currentState: 'SELL', symbol: type.symbol, quantity: quantity, price: price, amount: amount });

    const history = { userId: userId, balance: balance };
    await addHistory("server", { history });

    await rabbitmqCreate({ userId: userId, msg: `SELL,${type.symbol},'Market',ask,${quantity},${price}` });

    return `You sold ${quantity} ${type.symbol}! Now, you have money ${balance}`;
}

async function walletItemConvert(_, { item }) {
    // Convert equals to one buy operation and one sell operation
    const {userId, idFrom, idTo, quantity} = item;
    const typeFrom = await typeFind( idFrom );
    const priceFrom = typeFrom.price;
    const newItemFrom = {userId: userId, id: idFrom, symbol: typeFrom.symbol, quantity: -quantity};
    const amountFrom = roundFun(quantity*priceFrom, 5);
    await walletUpdate(newItemFrom);
    await addOrder({ userId: userId, currentState: 'SELL', symbol: typeFrom.symbol, quantity: quantity, price: priceFrom, amount: amountFrom });

    await rabbitmqCreate({ userId: userId, msg: `BUY,${typeFrom.symbol},'Market',ask,${quantity},${priceFrom}` });

    const typeTo = await typeFind( idTo );
    const priceTo = typeTo.price;
    const quantityChange = roundFun(quantity*priceFrom/priceTo, 5);
    const newItemTo = {userId: userId, id: idTo, symbol: typeTo.symbol, quantity: quantityChange};
    await walletUpdate(newItemTo);
    await addOrder({ userId: userId, currentState: 'BUY', symbol: typeTo.symbol, quantity: quantity, price: priceTo, amount: amountFrom });

    await rabbitmqCreate({ userId: userId, msg: `SELL,${typeTo.symbol},'Market',ask,${quantityChange},${priceTo}` });

    const balance = await balanceDetail( 'server', { userId } );
    const history = { userId: userId, balance: balance };
    await addHistory("server", { history });

    return `You convert ${quantity} ${typeFrom.symbol} to ${quantityChange} ${typeTo.symbol}!`;
}

module.exports = { walletDetail, walletItemBuy, walletItemSell, walletItemConvert };