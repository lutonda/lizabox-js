var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const InstituteSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})


var Institute = (module.exports = mongoose.model("Institute", TaskSchema));