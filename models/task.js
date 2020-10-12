var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    points: {
        type: Number,
        default: 1
    },
    chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskType',
        autopopulate: true
    }

})


var Task = (module.exports = mongoose.model("Task", TaskSchema));