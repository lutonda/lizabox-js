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
    chapters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseCategory'
    }]

})

var Course = (module.exports = mongoose.model("Course", CourseSchema));