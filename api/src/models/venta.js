const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({

    productoID :{type:Schema.ObjectId, required: true,ref:"productos"},
    adminID :{type:Schema.ObjectId, required: true},
    fecha:{type:String , required: true},
    valor:{type:Number , required: true},
    cantidad:{type:Number , required: true},
    estados:{type:Number,default:0},
    });
    
module.exports = mongoose.model('ventas', TaskSchema)