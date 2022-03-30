/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, balanceDetail, balanceUpdate } = require('./db.js');
const { roundFun } = require('./util.js');
const { typeFind } = require('./types.js');
const { addHistory } = require('./history.js');

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
        return item.balance;
    } else {
        const wallet = await db.collection('wallet').findOneAndUpdate(
            { id: item.id, userId: item.userId },
            { $inc: { balance: item.balance } },
            { returnOriginal: false },
        );
        if (wallet.value.balance == 0) {
            await db.collection('wallet').deleteOne( { id: item.id, userId: item.userId });
        }
        return wallet.value.balance;
    }
}

async function walletItemBuy(_, { item }) {
    const userId = item.userId;
    const id = item.id;
    const modification = item.modification;
    const type = await typeFind( id );
    const price = type.price;

    const balanceChange = roundFun(modification/price, 5);
    const newItem = {userId: userId, id: id, typeName: type.typeName, balance: balanceChange};
    await walletUpdate(newItem);

    await balanceUpdate(userId, -roundFun(balanceChange*price, 5));
    const balance = await balanceDetail( 'server', { userId } );

    const history = { userId: userId, balance: balance };
    await addHistory("server", { history });

    return `You have bought ${balanceChange} ${type.typeName}!`;
}

async function walletItemSell(_, { item }) {

    const {userId, id, modification} = item;
    const type = await typeFind( id );
    const price = type.price;

    const newItem = {userId: userId, id: id, typeName: type.typeName, balance: -modification};
    await walletUpdate( newItem );

    const balanceChange = roundFun(modification*price, 5);
    await balanceUpdate( userId, balanceChange );
    const balance = await balanceDetail( 'server', { userId } );

    const history = { userId: userId, balance: balance };
    await addHistory("server", { history });

    return `You sold ${modification} ${type.typeName}! Now, you have money ${balance}`;
}

async function walletItemConvert(_, { item }) {

    const {userId, idFrom, idTo, modification} = item;
    const typeFrom = await typeFind( idFrom );
    const priceFrom = typeFrom.price;
    const newItemFrom = {userId: userId, id: idFrom, typeName: typeFrom.typeName, balance: -modification};
    await walletUpdate(newItemFrom);

    const typeTo = await typeFind( idTo );
    const priceTo = typeTo.price;
    const balanceChange = roundFun(modification*priceFrom/priceTo, 5);
    const newItemTo = {userId: userId, id: idTo, typeName: typeTo.typeName, balance: balanceChange};
    await walletUpdate(newItemTo);

    const balance = await balanceDetail( 'server', { userId } );
    const history = { userId: userId, balance: balance };
    await addHistory("server", { history });

    return `You convert ${modification} ${typeFrom.typeName} to ${balanceChange} ${typeTo.typeName}!`;
}

module.exports = { walletDetail, walletItemBuy, walletItemSell, walletItemConvert };