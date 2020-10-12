var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");


const ChapterSchema = new mongoose.Schema({
    description: {
        type: String
    },
    isPreviousDependents: {
        type: Boolean,
        default: false
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        autopopulate: true
    }],
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
})

ChapterSchema.plugin(require('mongoose-autopopulate'));
var Chapter = (module.exports = mongoose.model("Chapter", ChapterSchema));