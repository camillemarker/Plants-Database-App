const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    name: String,
    plantType: String,
    datePlanted: Date,
    sunshineRec: String,
    waterRec: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Plant', plantSchema)
