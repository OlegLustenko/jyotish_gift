import mongoose from 'mongoose';
const {consts} = require('config').default;

let Schema = mongoose.Schema;

let ObjectId = Schema.Types.ObjectId;


let OrderSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: 'user',
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});


export default mongoose.model('Order', OrderSchema);
