const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    userID:{type:Schema.ObjectId, required: true},
    nombre :{type:String, required: true, unique:true},
    precio:{type:String , required: true},
    cantidad:{type:String , required: true},
    estados:{type:String , required: true},
    
}); 

module.exports = mongoose.model('productos', TaskSchema)