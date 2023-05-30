const Plant = require('../models/plant')

module.exports = {
  create
}

async function create(req, res) {
  const plant = await Plant.findById(req.params.id)
  let observation = {
    content: req.body.content,
    user: req.user._id
  }
  plant.observations.push(observation)
  try {
    await plant.save()
    res.redirect(`/plants/${plant._id}`)
  } catch (err) {
    console.log(err)
    res.redirect(`/plants/${plant._id}`)
  }
}
