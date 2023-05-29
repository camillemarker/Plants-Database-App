const Plant = require('../models/plant')

module.exports = {
  create
}

async function create(req, res) {
  const plant = await Plant.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  plant.observations.push(req.body)
  try {
    await plant.save()
    res.redirect(`/plants/${plant._id}`)
  } catch (err) {
    console.log(err)
    res.redirect(`/plants/${plant._id}`)
  }
}
