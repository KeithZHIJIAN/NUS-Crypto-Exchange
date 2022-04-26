const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
const about = require('./about.js');
const user = require('./user.js');
const history = require('./history.js');
const order = require('./order.js');
const types = require('./types.js');
const wallet = require('./wallet.js');
const db = require('./db.js');

const resolvers = {
  Query: {
    about: about.getMessage,
    users: user.users,
    userFind: user.userFind,
    login: user.login,
    logout: user.logout,
    historyList: history.historyList,
    orderList: order.orderList,
    typesList: types.typesList,
    typeFind: types.typeFind,
    walletDetail: wallet.walletDetail,
    balanceDetail: db.balanceDetail,
    currentUserQuery: user.currentUserQuery,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    register: user.register,
    addHistory: db.addHistory,
    walletItemBuy: wallet.walletItemBuy,
    walletItemSell: wallet.walletItemSell,
    walletItemConvert: wallet.walletItemConvert,
    topup: user.topup,
    updateProfile: user.updateProfile,
    updatePassword: user.updatePassword,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };
