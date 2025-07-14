import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  full: String,
  short: String
});

const Url = mongoose.model('Url', urlSchema);

export default Url;
