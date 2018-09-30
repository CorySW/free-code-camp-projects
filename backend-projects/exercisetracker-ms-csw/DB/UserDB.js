const Mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = Mongoose.Schema;

const MyUserSchema = new Schema({
  _id: {
  'type': String,
  'default': shortid.generate
},
    userNAME: String,
}, {versionKey:false});

const UserModel = Mongoose.model('users', MyUserSchema);

module.exports = UserModel;