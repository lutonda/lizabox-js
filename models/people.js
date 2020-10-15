var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const findOrCreate = require('mongoose-find-or-create')

const PeopleSchema = new mongoose.Schema({
    code: {
        type: Number,
        //required: true,
        unique: true,
        set:(s)=>s.toFixed(3),
        //get:(s)=>s==undefined ? s : 'xZ'+s
    },
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    telephone: {
        type: Number,
        unique: true
    },
    linkedin: {
        type: String,
    },
    facebook: {
        type: String,
    },
    bio: {
        type: String,
    },
    associations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Association',
        autopopulate: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    isActive: {
        type: Boolean,
        default:false
    }
}, {
    timestamps: true
})

PeopleSchema.plugin(findOrCreate)
var People = (module.exports = mongoose.model("People", PeopleSchema));