const express = require('express')
const router = new express.Router()
import weatherController from '../controllers/weatherController'

router.get('/city/:query',weatherController.getCity)
router.post('/getReport',weatherController.getReport)

module.exports = router;
