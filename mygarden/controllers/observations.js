const Plant = require('../models/plant')

module.exports = {
  create,
  delete: deleteObservation
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
    console.log('THIS IS MY OBSERVATION', observation.user)
  } catch (err) {
    console.log(err)
    res.redirect(`/plants/${plant._id}`)
  }
}

function deleteObservation(req, res, next) {
  Plant.findOne({
    'observations._id': req.params.id,
    'observations.user': req.user._id
  }).then(function (plant) {
    if (!plant) return res.redirect('/plants')
    plant.observations.remove(req.params.id)
    plant
      .save()
      .then(function () {
        res.redirect(`/plants/${plant._id}`)
      })
      .catch(function (err) {
        return next(err)
      })
  })
}
