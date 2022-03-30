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

db.users.remove({});
db.users.createIndex({ id: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ firstName: 1 });
db.users.createIndex({ lastName: 1 });
db.users.createIndex({ password: 1 });
db.users.createIndex({ balance: 1 });

db.userCounters.remove({ _id: 'users' });
db.userCounters.insert({ _id: 'users', current: 0 });

const typesDB = 
[
  {id:0, typeName:"ETH", price:10}, 
  {id:1, typeName:"BTC", price:20}, 
  {id:2, typeName:"XRP", price:30}, 
  {id:3, typeName:"BNB", price:40}, 
  {id:4, typeName:"AMD", price:50}, 
  {id:5, typeName:"AAPL", price:60}
];
db.types.remove({});
db.types.insertMany(typesDB);
db.types.createIndex({ id: 1 }, { unique: true });
db.types.createIndex({ name: 1 }, { unique: true });
db.types.createIndex({ price: 1 });
var count = db.types.count();
print('Inserted', count, 'types');

db.wallet.remove({});
db.wallet.createIndex({ id: 1 });
db.wallet.createIndex({ userId: 1 });
db.wallet.createIndex({ typeName: 1 });
db.wallet.createIndex({ balance: 1 });

db.history.remove({});
db.history.createIndex({ id: 1 });
db.history.createIndex({ userId: 1 });
db.history.createIndex({ time: 1 }); 
db.history.createIndex({ balance: 1 });

db.historyCounters.remove({});

db.currentUser.remove({});
db.currentUser.insert({ _id: 'currentUser', currentId: -1, email: '' });