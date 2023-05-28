const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    name: String,
    plantType: { type: String, required: true },
    datePlanted: { type: Date, required: true },
    sunshineRec: { type: String, required: true },
    waterRec: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Plant', plantSchema)
