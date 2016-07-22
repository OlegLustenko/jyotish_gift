import mongoose from 'mongoose';
import { config } from 'config';
let Schema = mongoose.Schema;
let consts = config.consts;
let ObjectId = Schema.Types.ObjectId;


let ChartSchema = new mongoose.Schema({

});

export default mongoose.model('Chart', ChartSchema);
