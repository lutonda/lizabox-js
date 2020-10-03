var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const CourseCategorySchema = new mongoose.Schema({
    description: {
        type: String,
        unique: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

})


var CourseCategory = (module.exports = mongoose.model("CourseCategory", TaskSchema));