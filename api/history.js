/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, getNextHistoryId } = require('./db.js');

async function historyList() {
    const db = getDb();
    const history = await db.collection('history').find({}).toArray();
    return history;
}

async function historyFind(_, { time }) {
    const db = getDb();

    const historyMatch = await db.collection('history')
        .find({ time: time }).toArray();
    return historyMatch;
}

async function addHistory(_, history) {
    const db = getDb();

    const newHistory = Object.assign({}, history);
    newHistory.id = await getNextHistoryId('history')-1;
    let myDate = new Date();//获取系统当前时间
    if (myDate.getMinutes()<10) {
        newHistory.time = `${myDate.getHours()}:0${myDate.getMinutes()}`;
    } else {
        newHistory.time = `${myDate.getHours()}:${myDate.getMinutes()}`;
    }
    const result = await db.collection('history').insertOne(newHistory);
    const returnHistory = await db.collection('users').findOne({ _id: result.insertedId });
    if (returnHistory) {
        return returnHistory;
    }
}

module.exports = { historyList, historyFind, addHistory };