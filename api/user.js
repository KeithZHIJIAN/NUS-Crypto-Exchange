/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, getNextUserId } = require('./db.js');
const { historyInit, addHistory } = require('./history.js');

async function users() {
    const db = getDb();

    const users = await db.collection('users').find({}).toArray();
    return users;
}

async function userFind(_, { email }) {
    const db = getDb();

    const userMatch = await db.collection('users')
        .findOne({ email: email });
    return userMatch;
}

async function register(_, { user }) {
    const db = getDb();

    const userMatch = await db.collection('users')
        .findOne({ email: user.email });
    if (!userMatch) {
        const newuser = Object.assign({}, user);
        newuser.id = await getNextUserId('users')-1;
        newuser.balance = 100;
        await historyInit(newuser.id, newuser.balance);
        const result = await db.collection('users').insertOne(newuser);
        if (await db.collection('users').findOne({ _id: result.insertedId })) {
            await db.collection('currentUser').findOneAndUpdate({ _id: 'currentUser' },{ $set: {currentId: newuser.id, email: newuser.email }});
            return 'Successfully register!';
        } else {
            return 'Something wrong when register!';
        }
    } else {
        return 'Email has been registered, please check!';
    }
}

async function login(_, { user }) {
    const db = getDb();

    const userMatch = await db.collection('users')
        .findOne({ email: user.email });
    if (userMatch) {
        if (userMatch.password === user.password) {
            await db.collection('currentUser').findOneAndUpdate({ _id: 'currentUser' },{ $set: {currentId: userMatch.id, email: userMatch.email}});
            return 'Successfully login!';
        } else {
            return 'Password does not match the email, please check!';
        }
    } else {
        return 'Email has not been registered, please check!';
    }
}

async function logout() {
    const db = getDb();

    await db.collection('currentUser').findOneAndUpdate({ _id: 'currentUser' },{ $set: {currentId: -1, email: ''} });
    return 'Successfully logout!';
}

async function currentUserQuery() {
    const db = getDb();

    const currentUser = await db.collection('currentUser').findOne({ _id: 'currentUser' });
    const result = {currentId: currentUser.currentId, email: currentUser.email};
    return result;
}

async function topup(_, { topupInput }) {
    const db = getDb();

    const userId = topupInput.userId;
    const amount = topupInput.amount;

    const result = await db.collection('users').findOneAndUpdate(
        { id: userId },
        { $inc: { balance: amount } },
        { returnOriginal: false },
    );
    const newBalance = result.value.balance;

    const history = { userId: userId, balance: newBalance };
    await addHistory("server", { history });
    
    return newBalance;
}

module.exports = { users, register, login, logout, userFind, currentUserQuery, topup };