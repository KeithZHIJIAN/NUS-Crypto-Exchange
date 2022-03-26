/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, getNextUserId } = require('./db.js');

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
        const result = await db.collection('users').insertOne(newuser);
        if (await db.collection('users').findOne({ _id: result.insertedId })) {
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
            return 'Successfully login!';
        } else {
            return 'Password does not match the email, please check!';
        }
    } else {
        return 'Email has not been registered, please check!';
    }
}

module.exports = { users, register, login, userFind };