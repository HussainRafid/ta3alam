const express = require("express")
const mognoose = require('mongoose')

const Schema = mognoose.Schema
const ReviewSchema = new Schema({
    src: {
        type:Buffer,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    content: {
        type:String,
        require:true
    }
})

const ReviewModel = mognoose.model("reviews", ReviewSchema)
module.exports = ReviewModel