const Plant = require('../models/plant')

module.exports = {
  index,
  show,
  new: newPlant,
  create,
  delete: deletePlant
}

async function index(req, res) {
  if (!req.user) {
    return res.redirect('/')
  }
  const userId = req.user._id
  const plants = await Plant.find({ user: userId })
  res.render('plants/index', { title: 'Plants', plants })
}

function newPlant(req, res) {
  res.render('plants/new', { title: 'Add Plant', errorMsg: '' })
}

async function create(req, res) {
  try {
    const newPlant = new Plant({
      imageLink: req.body.imageLink,
      name: req.body.name,
      plantType: req.body.plantType,
      datePlanted: req.body.datePlanted,
      sunshineRec: req.body.sunshineRec,
      waterRec: req.body.waterRec,
      user: req.user._id
    })
    await newPlant.save()
    res.redirect(`/plants`)
  } catch (err) {
    console.log(err)
    res.render('plants/new', { errorMsg: err.message })
  }
}

async function show(req, res) {
  const plant = await Plant.findById(req.params.id).populate({
    path: 'observations',
    populate: {
      path: 'user'
    }
  })
  res.render('plants/show', { title: 'Plant Details', plant })
}

function deletePlant(req, res, next) {
  Plant.findById(req.params.id)
    .then(function (plant) {
      if (!plant) {
        return res.redirect('/plants')
      }
      return Plant.findByIdAndRemove(req.params.id)
    })
    .then(function () {
      res.redirect('/plants')
    })
    .catch(function (err) {
      return next(err)
    })
}
