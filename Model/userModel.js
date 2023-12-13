const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    cart:[  { productId: {type: mongoose.Schema.Types.ObjectId,ref: 'Product'}, quantity:Number,stock:Number }],
    orderedProducts:[]
})
module.exports = mongoose.model("User",userSchema)