var Chapter = require('../models/chapter');
var Course = require('../models/course');
const Task = require('../models/task');


exports.create = async(req, res) => {
    let course = await Course.findById(req.body.course._id);
    req.body.course = null
    let chapter = await Chapter.create(req.body);
    chapter.course = course;
    chapter.save()
    course.chapters.push(chapter);
    course.save()
        //course.chapters

    res.json({
        status: 200,
        message: "success",
        data: chapter
    })
}


exports.update = async(req, res) => {

    let chapter = await Chapter.findById(req.params.id, (err, chapter) => {

        chapter.description = req.body.description;
        chapter.name = req.body.name;
        chapter.save();

        res.json({
            status: 200,
            message: "sucess",
            data: chapter || err
        });

    });
}

exports.findOneBy = async(req, res) => {

    let chapter = await Chapter.findById(req.params.id).populate('tasks');

    res.json({
        status: 200,
        message: "sucess",
        data: chapter
    });
}

exports.findAllBy = async(req, res) => {
    let chapters = await Chapter.find();

    res.json({
        status: 200,
        message: "success",
        data: chapters
    })
}

exports.delete = async(req, res) => {

    let chapter = await Chapter.findById(req.params.id, (err, data) => {

        chapter.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });


}