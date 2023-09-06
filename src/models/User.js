const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:String,required:false,unique:true},
    gender:{type:String,required:false},
    isAdmin:{type:Boolean, default:false}
})


const User=mongoose.model('User',userSchema)

module.exports=User


