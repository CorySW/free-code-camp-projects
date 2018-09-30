const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const MyUserSchema = new Schema({
    userNAME: String,
    userID: String
}, {versionKey:false});

const UserModel = Mongoose.model('users', MyUserSchema);

module.exports = UserModel;