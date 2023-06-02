const mongoose = require('mongoose')
const Schema = mongoose.Schema

const observationSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

const plantSchema = new Schema(
  {
    imageLink: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    plantType: {
      type: String,
      enum: ['flower', 'fruit', 'vegetable', 'shrub', 'herb', 'ther'],
      required: true
    },
    datePlanted: {
      type: Date,
      required: true
    },
    sunshineRec: {
      type: String,
      enum: ['full sun', 'partial sun', 'partial shade', 'full shade'],
      required: true
    },
    waterRec: { type: String, required: true },
    observations: [observationSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Plant', plantSchema)
