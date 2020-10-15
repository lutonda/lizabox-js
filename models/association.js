var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const AssociationSchema = new mongoose.Schema({
    description: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required:true
    },
    people: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'People',
        required:true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required:true
    },
    isActive: {
        type: Boolean,
        default: true
    },

}, {
    timestamps: true
})


var AssociationTask = (module.exports = mongoose.model("Association", AssociationSchema));