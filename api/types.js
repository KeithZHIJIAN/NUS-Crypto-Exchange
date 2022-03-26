/* const { UserInputError } = require('apollo-server-express'); */
const { getDb, } = require('./db.js');

async function typesList() {
    const db = getDb();
    const types = await db.collection('types').find({}).toArray();
    return types;
}

async function typeFind( id ) {
    const db = getDb();

    const typeMatch = await db.collection('types')
        .findOne({ id: id });
    return typeMatch;
}

module.exports = { typesList, typeFind, };