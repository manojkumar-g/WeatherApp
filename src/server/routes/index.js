const express = require('express')
const router = new express.Router()
import weatherController from '../controllers/weatherController';
import getRedisMiddleware from '../middlewares/redisMiddleware'
import RedisApp from '../RedisApp'

let redisMiddleware = getRedisMiddleware(RedisApp.getServer())


router.get('/city/:query',redisMiddleware.checkForList,weatherController.getCity)
router.post('/getReport',redisMiddleware.checkForReport,weatherController.getReport)

module.exports = router;
