const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    name: {type: String,required: true},
    email: {type: String,unique:true,required: true},
    rol:{type:Number,default:0 },
    token:{type:String,default:""},
    date : {type:String,defaul:""}
    });

module.exports = mongoose.model('user', TaskSchema)