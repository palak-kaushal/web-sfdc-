const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type:String, required:true, default:"" },
    email: { type:String, unique:true, required:true },
    image: { type:String },
    pancard: { type:String },
    aadharcard: { type:String },
    password: { type:String, required:true, default:"" },
    contact: { type:String, required:true, default:"" },
    address: { type:String, required:true, default:"" },
    createdAt: { type:Date, default:Date.now },
    otp: { type:String, default:null },        // ✅ fix
    otpExpire: { type:Date, default:null }     // ✅ fix
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
