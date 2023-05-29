const Plant = require('../models/plant')

module.exports = {
  create
}

async function create(req, res) {
  const plant = await Plant.findById(req.params.id)
  plant.observations.push(req.body)
  try {
    await plant.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/plants/${plant._id}`)
}
