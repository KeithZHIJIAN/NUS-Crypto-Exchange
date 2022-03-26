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

async function addHistory(_, { history }) {
    const db = getDb();
    
    const newHistory = Object.assign({}, history);
    newHistory.id = await getNextHistoryId('history')-1;
    const result = await db.collection('history').insertOne(newHistory);
    const returnHistory = await db.collection('users').findOne({ _id: result.insertedId });
    if (returnHistory) {
        return returnHistory;
    }
}

module.exports = { historyList, historyFind, addHistory };