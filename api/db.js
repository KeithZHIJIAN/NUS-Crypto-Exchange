require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;

async function connectToDb() {
  const url = process.env.DB_URL || 'mongodb://localhost/NUSwap';
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

// async function getNextOrderId(name) {
//   const result = await db.collection('orderCounters').findOneAndUpdate(
//       { _id: name },
//       { $inc: { current: 1 } },
//       { returnOriginal: false },
//   );
//   return result.value.current;
// }

async function getNextRabbitMQId(name) {
  const result = await db.collection('rabbitmqCounters').findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
  );
  return result.value.current;
}

async function addHistory(_, { history } ) {
  const userId = history.userId;
  const db = getDb();

  const newHistory = Object.assign({}, history);
  newHistory.id = await getNextHistoryId('history'+String(userId))-1;
  let myDate = new Date();//获取系统当前时间
  if (myDate.getMinutes()<10) {
    newHistory.time = `${myDate.getHours()}:0${myDate.getMinutes()}`;
  } else {
    newHistory.time = `${myDate.getHours()}:${myDate.getMinutes()}`;
  }
  const result = await db.collection('history').insertOne(newHistory);
  const returnHistory = await db.collection('history').findOne({ _id: result.insertedId });
  if (returnHistory) {
    return returnHistory;
  }
}

async function balanceDetail(_, { userId }) {
  const db = getDb();
  const user = await db.collection('users').findOne({ id: userId });

  const history = { userId: user.id, balance: user.balance };
  await addHistory("server", { history });

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

module.exports = { connectToDb, getNextUserId, getNextHistoryId, getDb, balanceDetail, balanceUpdate, addHistory, /*getNextOrderId,*/ };