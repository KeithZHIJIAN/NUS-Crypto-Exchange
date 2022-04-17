/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo coinbase scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/coinbase scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/coinbase scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

// Drop all the collections in case that they are used before
// Remove only remove the data in a collection, but will not override the rule (such as unique or not)
// The best way might directly drop these collections and recreate them
db.users.drop({});
db.userCounters.drop({});
db.types.drop({});
db.wallet.drop({});
db.history.drop({});
db.historyCounters.drop({});
db.currentUser.drop({});
db.orders.drop({});
db.orderCounters.drop({});
db.rabbitmq.drop({});
db.rabbitmqCounters.drop({});

db.users.remove({});
db.users.createIndex({ id: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ firstName: 1 });
db.users.createIndex({ lastName: 1 });
db.users.createIndex({ password: 1 });
db.users.createIndex({ balance: 1 });
db.users.createIndex({ photoURL: 1 });

db.userCounters.remove({ _id: 'users' });
db.userCounters.insert({ _id: 'users', current: 0 });

const typesDB = 
[
  {id:0, symbol:"ETH", description:"test", price:10},
  {id:1, symbol:"BTC", description:"test", price:20},
  {id:2, symbol:"XRP", description:"test", price:30},
  {id:3, symbol:"BNB", description:"test", price:40},
  {id:4, symbol:"AMD", description:"test", price:50},
  {id:5, symbol:"AAPL", description:"test", price:60}
];
db.types.remove({});
db.types.insertMany(typesDB);
db.types.createIndex({ id: 1 }, { unique: true });
db.types.createIndex({ symbol: 1 }, { unique: true });
db.types.createIndex({ description: 1 });
db.types.createIndex({ price: 1 });
var count = db.types.count();
print('Inserted', count, 'types');

db.wallet.remove({});
db.wallet.createIndex({ id: 1 });
db.wallet.createIndex({ userId: 1 });
db.wallet.createIndex({ symbol: 1 });
db.wallet.createIndex({ quantity: 1 });

db.history.remove({});
db.history.createIndex({ id: 1 });
db.history.createIndex({ userId: 1 });
db.history.createIndex({ time: 1 }); 
db.history.createIndex({ balance: 1 });

db.historyCounters.remove({});

db.currentUser.remove({});
db.currentUser.insert({ _id: 'currentUser', currentId: -1, email: '', photoURL: '' });

db.orders.remove({});
db.orders.createIndex({ id: 1 });
db.orders.createIndex({ userId: 1 });
db.orders.createIndex({ currentState: 1 });
db.orders.createIndex({ symbol: 1 });
db.orders.createIndex({ quantity: 1 });
db.orders.createIndex({ price: 1 });
db.orders.createIndex({ amount: 1 });

db.orderCounters.remove({});

db.rabbitmq.remove({});
db.rabbitmq.createIndex({ id: 1 });
db.rabbitmq.createIndex({ userId: 1 });
db.rabbitmq.createIndex({ state: 1 });
db.rabbitmq.createIndex({ symbol: 1 });
db.rabbitmq.createIndex({ orderType: 1 });
db.rabbitmq.createIndex({ side: 1 });
db.rabbitmq.createIndex({ quantity: 1 });
db.rabbitmq.createIndex({ price: 1 });
db.rabbitmq.createIndex({ tradeId: 1 });
db.rabbitmq.createIndex({ note: 1 });

db.rabbitmqCounters.remove({});