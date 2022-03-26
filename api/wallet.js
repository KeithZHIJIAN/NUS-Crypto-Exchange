/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, balanceDetail, balanceUpdate } = require('./db.js');
const { roundFun } = require('./util.js');
const { typeFind } = require('./types.js');
const { addHistory } = require('./history.js');

async function walletDetail() {
    const db = getDb();
    const wallet = await db.collection('wallet').find({}).toArray();
    return wallet;
}

async function walletItemFind( id ) {
    const db = getDb();

    const walletItemMatch = await db.collection('wallet')
        .findOne({ id: id });
    return walletItemMatch;
}

async function walletUpdate( item ) {
    const db = getDb();
    const itemMatch = await walletItemFind(item.id);
    if ( itemMatch == null ) {
        await db.collection('wallet').insertOne(item);
        return item.balance;
    } else {
        const wallet = await db.collection('wallet').findOneAndUpdate(
            { id: item.id },
            { $inc: { balance: item.balance } },
            { returnOriginal: false },
        );
        if (wallet.value.balance == 0) {
            await db.collection('wallet').deleteOne({ id: item.id });
        }
        return wallet.value.balance;
    }
}

async function walletItemBuy(_, { item }) {

    const {id, modification} = item;
    const type = await typeFind( id );
    const price = type.price;

    const balanceChange = roundFun(modification/price, 5);
    const newItem = {id: id, typeName: type.typeName, balance: balanceChange};
    await walletUpdate(newItem);

    await balanceUpdate(-roundFun(balanceChange*price, 5));
    const balance = await balanceDetail();

    /* let myDate = new Date();//获取系统当前时间
    await addHistory("server", { history: { time: `${myDate.getHours()}:${myDate.getMinutes()}`, balance: balance }}); */
    const history = { balance: balance };
    await addHistory("server", history);

    return `You have bought ${balanceChange} ${type.typeName}!`;
}

async function walletItemSell(_, { item }) {

    const {id, modification} = item;
    const type = await typeFind( id );
    const price = type.price;

    const newItem = {id: id, typeName: type.typeName, balance: -modification};
    await walletUpdate(newItem);

    const balanceChange = roundFun(modification*price, 5);
    await balanceUpdate(balanceChange);
    const balance = await balanceDetail();

    /* let myDate = new Date();//获取系统当前时间
    await addHistory("server", { history: { time: `${myDate.getHours()}:${myDate.getMinutes()}`, balance: balance }}); */
    const history = { balance: balance };
    await addHistory("server", history);

    return `You sold ${modification} ${type.typeName}! Now, you have money ${balance}`;
}

async function walletItemConvert(_, { item }) {

    const {idFrom, idTo, modification} = item;
    const typeFrom = await typeFind( idFrom );
    const priceFrom = typeFrom.price;
    const newItemFrom = {id: idFrom, typeName: typeFrom.typeName, balance: -modification};
    await walletUpdate(newItemFrom);

    const typeTo = await typeFind( idTo );
    const priceTo = typeTo.price;
    const balanceChange = roundFun(modification*priceFrom/priceTo, 5);
    const newItemTo = {id: idTo, typeName: typeTo.typeName, balance: balanceChange};
    await walletUpdate(newItemTo);

    const balance = await balanceDetail();
    /* let myDate = new Date();//获取系统当前时间
    await addHistory("server", { history: { time: `${myDate.getHours()}:${myDate.getMinutes()}`, balance: balance }}); */
    const history = { balance: balance };
    await addHistory("server", history);

    return `You convert ${modification} ${typeFrom.typeName} to ${balanceChange} ${typeTo.typeName}!`;
}

module.exports = { walletDetail, walletItemBuy, walletItemSell, walletItemConvert };