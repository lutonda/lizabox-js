var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String
    },
    associations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Association'
    }]

})


var Role = (module.exports = mongoose.model("Role", RoleSchema));