var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    code: {
        type: Number,
        default: 1
    },
    service: {
        type: Number
    },
    bio: {
        type: String,
    },
    associations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Association',
        autopopulate: true
    }],
    isActive: {
        type: Boolean,
        default:false
    }
}, {
    timestamps: true
})


var People = (module.exports = mongoose.model("People", PeopleSchema));