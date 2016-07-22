import mongoose from 'mongoose';
import { config } from 'config';
let Schema = mongoose.Schema;
let consts = config.consts;
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
