var Task = require('../models/task');
var Chapter = require('../models/chapter');
var TypeTask = require('../models/typeTask');

exports.create = async(req, res) => {

    req.body.type = await TypeTask.findById(req.body.type._id);
    req.body.chapter = await Chapter.findById(req.body.chapter._id);
    let task = await Task.create(req.body);
    req.body.chapter.tasks.push(task);
    req.body.chapter.save()

    res.json({
        status: 200,
        message: "success",
        data: task
    })
}


exports.update = async(req, res) => {

    let task = await Task.findById(req.params.id, (err, task) => {

        task.description = req.body.description;
        task.name = req.body.name;
        task.save();

        res.json({
            status: 200,
            message: "sucess",
            data: task || err
        });

    });
}

exports.findOneBy = async(req, res) => {

    let task = await Task.findById(req.params.id).populate('chapter');

    res.json({
        status: 200,
        message: "sucess",
        data: task
    });


}

exports.findAllBy = async(req, res) => {
    let tasks = await Task.find();

    res.json({
        status: 200,
        message: "success",
        data: tasks
    })
}

exports.delete = async(req, res) => {

    let task = await Task.findById(req.params.id, (err, data) => {

        task.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });


}