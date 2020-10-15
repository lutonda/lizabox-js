var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const findOrCreate = require('mongoose-find-or-create')
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    apikey: {
        type: String,
        default:parseInt(Math.random()%100)
    },
    service: {
        type: String
    },
    people: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'People',
        autopopulate: true
    },
    isAdmin: {
        type: Boolean,
        default:false
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
UserSchema.plugin(findOrCreate)
var User = (module.exports = mongoose.model("User", UserSchema));
