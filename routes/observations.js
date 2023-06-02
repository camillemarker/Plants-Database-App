const express = require('express')
const router = express.Router()
const observationsCtrl = require('../controllers/observations')

router.post('/plants/:id/observations', observationsCtrl.create)
router.delete('/observations/:id', observationsCtrl.delete)

module.exports = router
