const express = require('express')
const router = express.Router()
const observationsCtrl = require('../controllers/observations')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/plants/:id/observations', ensureLoggedIn, observationsCtrl.create)
router.delete('/observations/:id', ensureLoggedIn, observationsCtrl.delete)

module.exports = router
