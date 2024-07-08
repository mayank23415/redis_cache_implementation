import cache from "../cache/cache.js";

const cacheMiddleware = async (req, res, next) => {
    const cacheKey = 'allData';

    try {
        const cachedData = await cache.getCache(cacheKey);
        if (cachedData) {
            return res.status(200).json(cachedData);
        }
        console.log('bob is here...');
        next();
    } catch (error) {
        console.error('Error in cache middleware:', error);
        next();
    }
};

export default {
    cacheMiddleware
}