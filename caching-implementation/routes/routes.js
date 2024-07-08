import express from 'express'
import controller from '../controller/controller.js'
import cacheMiddleware from '../middlewares/cacheMiddleware.js'

const router = express.Router()

router.get('/test', controller.testController)
router.get('/getData', cacheMiddleware.cacheMiddleware, controller.getData)

export default {router}