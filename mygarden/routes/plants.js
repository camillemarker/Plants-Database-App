const express = require('express')
const router = express.Router()
const plantsCtrl = require('../controllers/plants')

router.get('/', plantsCtrl.index)

router.get('/new', ensureLoggedIn, plantsCtrl.new)

router.get('/:id', plantsCtrl.show)

router.post('/', ensureLoggedIn, plantsCtrl.create)

module.exports = router
