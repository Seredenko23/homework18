import mongoose, {Model, Schema} from 'mongoose';

const itemSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  isBought: {
    type: Boolean,
    default: false
  }
})

const item = mongoose.model("Item", itemSchema)

export default item
