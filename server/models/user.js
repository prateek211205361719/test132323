
var mongoose = require('mongoose');
var { Schema } = mongoose;

var userSchema = new Schema({
    googleId:{
        type:String
    },
    credits:{
        type:Number,
        default:0
    }

});

var User = mongoose.model('users', userSchema);

module.exports = { User };