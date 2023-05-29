const Plant = require('../models/plant')

module.exports = {
  index,
  show,
  new: newPlant,
  create
}

async function index(req, res) {
  const plants = await Plant.find({})
  res.render('plants/index', { title: 'Plants', plants })
  console.log('RUNNING INDEX')
}

function newPlant(req, res) {
  res.render('plants/new', { title: 'Add Plant', errorMsg: '' })
  console.log('RUNNING NEW PLANT')
}

async function create(req, res) {
  try {
    await Plant.create(req.body)
    res.redirect(`/plants`)
  } catch (err) {
    console.log(err)
    res.render('plants/new', { errorMsg: err.message })
  }
  console.log('RUNNING CREATE')
}

async function show(req, res) {
  const plant = await Plant.findById(req.params.id)
  res.render('plants/show', { title: 'Plant Details', plant })
  console.log('RUNNING NEW PLANT')
}
