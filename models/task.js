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
    order: {
        type: Number
    },
    chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
        autopopulate: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskType',
        autopopulate: true
    }

}, {
    timestamps: true
})


var Task = (module.exports = mongoose.model("Task", TaskSchema));