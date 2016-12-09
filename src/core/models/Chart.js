import mongoose from 'mongoose';
const {consts} = require('config').default;
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;


let ChartSchema = new mongoose.Schema({});

export default mongoose.model('Chart', ChartSchema);
