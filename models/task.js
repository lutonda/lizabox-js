var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        unique: true
    },
    chapters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    }]

})


var Task = (module.exports = mongoose.model("Task", TaskSchema));