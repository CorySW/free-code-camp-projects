const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const MyExSchema = new Schema({
    userID: String,
    desc: String,
    duration: String
}, {timestamps:false}, { versionKey: false });

const ExModel = Mongoose.model('exercises', MyExSchema);

module.exports = ExModel;