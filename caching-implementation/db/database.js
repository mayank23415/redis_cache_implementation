import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const db_uri = process.env.DB_URI
const db_name = process.env.DB_NAM

const client = new MongoClient(db_uri)

async function dbHealth() {
    try {  
        await client.connect()
        return 'DB Connected Sucessfully'
    } catch (error) {
        console.log(error)
        return 'Failed to connect to DB'
    } finally {
        await client.close()
    }
}

async function getData() {
    try {
        await client.connect()
        const coll = client.db(db_name).collection(process.env.CL_CACHE)
        const result = await coll.find({}).toArray()
        return result
    } catch (error) {
        console.log("Error in getting data :", error)
        return "Something went wrong"
    } finally {
        await client.close()
    }
}


export default {
    dbHealth,
    getData
}