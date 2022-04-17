/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, getNextUserId } = require('./db.js');
const { historyInit, addHistory } = require('./history.js');
const { orderInit } = require('./order.js');
const { rabbitmqInit } = require('./rabbitmq.js');

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
        newuser.photoURL = newuser.photoURL == ''? '/static/mock-images/avatars/avatar_' + String(newuser.id % 25) + '.jpg' : newuser.photoURL
        await historyInit(newuser.id, newuser.balance);
        await rabbitmqInit(newuser.id);
        await orderInit(newuser.id);
        const result = await db.collection('users').insertOne(newuser);
        if (await db.collection('users').findOne({ _id: result.insertedId })) {
            await db.collection('currentUser').findOneAndUpdate({ _id: 'currentUser' },{ $set: {currentId: newuser.id, email: newuser.email, photoURL: newuser.photoURL }});
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
            await db.collection('currentUser').findOneAndUpdate({ _id: 'currentUser' },{ $set: {currentId: userMatch.id, email: userMatch.email, photoURL: userMatch.photoURL }});
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

    await db.collection('currentUser').findOneAndUpdate({ _id: 'currentUser' },{ $set: {currentId: -1, email: '', photoURL: ''} });
    return 'Successfully logout!';
}

async function currentUserQuery() {
    const db = getDb();

    const currentUser = await db.collection('currentUser').findOne({ _id: 'currentUser' });
    const result = {currentId: currentUser.currentId, email: currentUser.email, photoURL: currentUser.photoURL};
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

async function updateProfile(_, { profileInput }) {
    const db = getDb();

    const userId = profileInput.userId;
    const firstName = profileInput.firstName;
    const lastName = profileInput.lastName;

    await db.collection('users').findOneAndUpdate(
        { id: userId },
        { $set: {firstName: firstName, lastName: lastName} }
    );

    return 'Successfully update profile!';
}

async function updatePassword(_, { passwordInput }) {
    const db = getDb();

    const userId = passwordInput.userId;
    const password = passwordInput.password;

    const currentUser = await db.collection('users').findOne({ id: userId });
    if (currentUser.password == password) {
        return 'New password cannot be the same as the old one!'
    }

    await db.collection('users').findOneAndUpdate(
        { id: userId },
        { $set: {password: password} }
    );

    return 'Successfully update password!';
}

module.exports = { users, register, login, logout, userFind, currentUserQuery, topup, updateProfile, updatePassword };