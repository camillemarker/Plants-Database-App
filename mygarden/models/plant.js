const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    name: String,
    plantType: {
      type: String,
      enum: ['Flower', 'Fruit', 'Vegetable', 'Shrub', 'Herb', 'Other'],
      required: true
    },
    datePlanted: { type: Date, required: true },
    sunshineRec: {
      type: String,
      enum: ['Full Sun', 'Partial Sun', 'Partial Shade', 'Full Shade'],
      required: true
    },
    waterRec: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Plant', plantSchema)
