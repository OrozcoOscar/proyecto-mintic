const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    userID:{type:Schema.ObjectId, required: true},
    nombre :{type:String, required: true},
    precio:{type:String , required: true},
    cantidad:{type:Number , required: true},
    estado:{type:Number,default:0 },
    
}); 
module.exports = mongoose.model('producto', TaskSchema)