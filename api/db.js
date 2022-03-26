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

async function balanceDetail() {
  const db = getDb();
  const balance = await db.collection('balance').findOne({ _id: "balance" });
  return balance.current;
}

async function balanceUpdate( modification ) {
  const result = await db.collection('balance').findOneAndUpdate(
    { _id: "balance" },
    { $inc: { current: modification } },
    { returnOriginal: false },
  );
  return result.value.current;
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getNextUserId, getNextHistoryId, balanceDetail, balanceUpdate, getDb };
