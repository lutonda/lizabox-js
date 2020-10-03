var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const ChapterSchema = new mongoose.Schema({
    description: {
        type: String
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }

})


var Chapter = (module.exports = mongoose.model("Chapter", ChapterSchema));