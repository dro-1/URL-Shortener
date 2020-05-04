const mongoose = require('mongoose');

const  { Schema } = mongoose;

const urlSchema = new Schema({
    originalURL : {type:String,required:true},
    shortURL:{type:String,required:true},
    uniqueName:{type:String,required:true},
    dateCreated:{type:Date,default:new Date()}
})

const url = mongoose.model('url',urlSchema)

module.exports = url;