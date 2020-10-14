var mongoose = require("mongoose");
const sequenceGenerator = require('mongoose-sequence-plugin');
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

let generateCode=async () => {
    last = await Course.findOne({}, {}, { sort: { 'created_at': -1 } })
    return (last.code || 677) + 3
}
const CourseSchema = new mongoose.Schema({
    code: {
        type: Number,
        //required: true,
        unique: true,
        set:(s)=>s.toFixed(3),
        get:(g)=>parseFloat(g)
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    coverPic: {
        type: String
    },
    blog: {
        type: String
    },
    chapters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseCategory'
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    isPublished: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    },


    //Default fields
    isActive: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: new Date()
    }


}, {
    timestamps: true
})
CourseSchema.pre('save', async (next) => {
    const err = new Error('something went wrong');
    // If you call `next()` with an argument, that argument is assumed to be
    // an error.

    last = await Course.findOne({}, {}, { sort: { 'created_at': -1 } })
    this.code= (last.code || 677) + 3
    next();
}, { suppressWarning: true });
var Course = (module.exports = mongoose.model("Course", CourseSchema));