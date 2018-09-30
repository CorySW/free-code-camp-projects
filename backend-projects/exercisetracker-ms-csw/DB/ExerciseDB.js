const Mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = Mongoose.Schema;

const MyExSchema = new Schema({
  _id: {
  'type': String,
  'default': shortid.generate
},
    desc: String,
    duration: String
}, { versionKey: false });

const ExModel = Mongoose.model('exercises', MyExSchema);

module.exports = ExModel;