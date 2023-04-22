const mongoose = require("mongoose")
const Schema = mongoose.Schema
const MemeberSchema = new Schema({
    name:{
        require:true,
        type:String,
    },
    specialization: {
        require:true,
        type:String
    },
    src:{
        type:Buffer
    },
    desc:{
        type:String,
        require:true
    },
    socials: {
        type:Array,
        require:false
    }
}, {_id:true})

const MemberModel = mongoose.model("members", MemeberSchema)
module.exports = MemberModel