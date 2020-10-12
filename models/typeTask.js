var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const TypeTaskSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]

})


var TypeTask = (module.exports = mongoose.model("TypeTask", TypeTaskSchema));