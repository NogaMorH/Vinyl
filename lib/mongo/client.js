import * as mongodb from 'mongodb'

const { MongoClient } = mongodb

export const dbService = {
    getCollection
}

let DB_CONNECTION
const URI = process.env.MONGO_URI

async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = db.collection(collectionName)
        return collection
    } catch (err) {
        console.log('err:', err)
        throw err
    }
}

async function connect() {
    if (DB_CONNECTION) return DB_CONNECTION
    try {
        const client = await MongoClient.connect(URI)
        const db = client.db('vinyl-app')
        DB_CONNECTION = db
        return db
    }
    catch (err) {
        console.log('err:', err)
        throw err
    }
}