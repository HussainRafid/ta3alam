const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CourseSchema = new Schema({
    title:{
        require:true,
        type:String
    },
    isActive: {
        type:Boolean,
        default:true
    }
})

const CourseModel = mongoose.model("courses", CourseSchema)
module.exports = CourseModel