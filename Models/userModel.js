const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    title:{type:String, required:true},
    firstname: {type:String, required:true},
    lastname:{type:String, required:true},
    power:{type:Number, required:true},
    city:{type:String, required:true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;