import { createClient } from 'redis';
import util from 'util';

const redisClient = createClient();

const CACHE_TTL = 60;

const getCache = async (key) => {
    try {
        await redisClient.connect().catch(error => console.log("Error", error))
        const cachedData = await redisClient.get(key);
        return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
        console.error('Error in fetching data:', error);
        return null; 
    } finally {
        await redisClient.quit()
    }
};

const setCache = async (key, data) => {
    try {
        await redisClient.connect().catch(error => console.log("Error", error))
        await redisClient.setEx(key, CACHE_TTL, JSON.stringify(data)); // Corrected order of arguments
    } catch (error) {
        console.error('Error in setting data:', error);
    } finally {
        await redisClient.quit()
    }
};

export default {
    getCache,
    setCache
};