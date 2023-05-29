const express = require('express')
const router = express.Router()
const plantsCtrl = require('../controllers/plants')

router.get('/', plantsCtrl.index)

router.get('/new', plantsCtrl.new)

router.get('/:id', plantsCtrl.show)

router.post('/', plantsCtrl.create)

module.exports = router
