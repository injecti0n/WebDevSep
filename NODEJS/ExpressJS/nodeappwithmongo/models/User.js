const mongoose = require('mongoose')

// define a schema
let Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model('User',UserSchema);