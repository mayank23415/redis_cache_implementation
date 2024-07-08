import database from "../db/database.js"
import cache from '../cache/cache.js'

const testController = async (req, res) => {
    res.send(await database.dbHealth())
}

const getData = async (req, res) => {
    const cacheKey = 'allData'; // Ensure this key matches the one used in the middleware

    try {
        const data = await database.getData();
        await cache.setCache(cacheKey, data);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error in getting data:", error);
        res.status(500).send("Something went wrong");
    }
};

export default {
    testController,
    getData
}