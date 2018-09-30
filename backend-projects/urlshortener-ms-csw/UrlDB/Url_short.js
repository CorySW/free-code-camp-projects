const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const MySchema = new Schema({
    urlInput: String,
    shortened: Number
}, {timestamps:false});

const Model = Mongoose.model('urls', MySchema);

module.exports = Model;