import mongoose from 'mongoose'

const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
    },
    foodID: {
      type: String,
      required: [true, 'Please provide ID'],
      maxlength: 100,
    },
    measure: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    fiber: {
      type: Number,
      default: 0,
    },
    folate: {
      type: Number,
      default: 0,
    },
    iron: {
      type: Number,
      default: 0,
    },
    magnesium: {
      type: Number,
      default: 0,
    },
    phosphorus: {
      type: Number,
      default: 0,
    },
    potassium: {
      type: Number,
      default: 0,
    },
    vita: {
      type: Number,
      default: 0,
    },
    vitb6: {
      type: Number,
      default: 0,
    },
    vitc: {
      type: Number,
      default: 0,
    },
    vitd: {
      type: Number,
      default: 0,
    },
    vite: {
      type: Number,
      default: 0,
    },
    vitk: {
      type: Number,
      default: 0,
    },
    zinc: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  }
  // { timestamps: true }
)

export default mongoose.model('Food', FoodSchema)
