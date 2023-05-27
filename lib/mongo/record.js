import { ObjectId } from "mongodb";
import { dbService } from "./client";

export async function getRecords() {
    try {
        const collection = await dbService.getCollection('record')
        const records = await collection.find().toArray()
        // console.log('records:', records)
        return records
    } catch (err) {
        console.log('err:', err)
    }
}

export async function getTodoById(id) {
    try {
        const collection = await dbService.getCollection('record')
        const record = await collection.findOne({ _id: ObjectId(id) })
        console.log('record:', record)
        return todo
    } catch (err) {
        console.log('err:', err)
    }

}

// import clientPromise from "./client"
// import { ObjectId } from "mongodb"

// let client
// let db
// let recordCollection

// async function init() {
//     console.log('db:', db)
//     if (db) return
//     try {
//         console.log('clientPromiseee:', clientPromise)
//         client = await clientPromise
//         console.log('client:', client)
//         db = await client.db()
//         console.log('db:', db)
//         recordCollection = await db.collection('record')
//     } catch (err) {
//         throw new Error('Failed to connect to db')
//     }
// }

// ; (async () => {
//     await init()
// })()

// export async function getRecords() {
//     try {
//         if (!recordCollection) await init()
//         // console.log('recordCollection:', recordCollection)
//         const records = await recordCollection.find().toArray()
//         console.log('records:', records)
//         return records
//     } catch (err) {
//         console.log('err:', err)
//         throw new Error('Failed to fetch records')
//     }
// }