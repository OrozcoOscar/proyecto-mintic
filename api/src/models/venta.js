const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    productoID :{type:Schema.ObjectId, required: true},
    adminID :{type:Schema.ObjectId, required: true},
    fecha:{type:Date , required: true},
    valor:{type:String , required: true},
    estado:{type:Number,default:0},
    });
module.exports = mongoose.model('venta', TaskSchema)