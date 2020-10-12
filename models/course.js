var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const CourseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    coverPic: {
        type: String
    },
    blog: {
        type: String
    },
    chapters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseCategory'
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    isPublished: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    },


    //Default fields
    isActive: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: new Date()
    }


})

var Course = (module.exports = mongoose.model("Course", CourseSchema));