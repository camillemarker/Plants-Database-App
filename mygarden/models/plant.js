const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  }
})

const plantSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    plantType: {
      type: String,
      enum: ['flower', 'fruit', 'vegetable', 'shrub', 'herb', 'other'],
      required: true
    },
    datePlanted: { type: Date, required: true },
    sunshineRec: {
      type: String,
      enum: ['fullSun', 'partSun', 'partShade', 'fullShade'],
      required: true
    },
    waterRec: { type: String, required: true },
    comments: [commentSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Plant', plantSchema)
