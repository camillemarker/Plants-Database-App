const Plant = require('../models/plant')

module.exports = {
  new: newPlant,
  create
}

function newPlant(req, res) {
  res.render('plants/new', { errorMsg: '' })
}

async function create(req, res) {
  try {
    const plant = await Plant.create(req.body)
    res.redirect(`/plants/${plant._id}`)
  } catch (err) {
    res.render('plants/new', { errorMsg: err.message })
  }
}
