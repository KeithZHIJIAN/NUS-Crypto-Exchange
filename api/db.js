require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;

async function connectToDb() {
  const url = process.env.DB_URL || 'mongodb://localhost/NUSSwap';
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

async function getNextUserId(name) {
  const result = await db.collection('userCounters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

async function getNextHistoryId(name) {
  const result = await db.collection('historyCounters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

async function balanceDetail(_, { userId }) {
  const db = getDb();
  const user = await db.collection('users').findOne({ id: userId });
  return user.balance;
}

async function balanceUpdate(userId, modification) {
  const db = getDb();
  const result = await db.collection('users').findOneAndUpdate(
    { id: userId },
    { $inc: { balance: modification } },
    { returnOriginal: false },
  );
  return result.value.balance;
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getNextUserId, getNextHistoryId, getDb, balanceDetail, balanceUpdate, };
