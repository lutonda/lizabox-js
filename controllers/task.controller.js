var Task = require('../models/task');

exports.create = async(req, res) => {

    let task = await Task.create(req.body);

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

    await Task.findById(req.params.id, (err, data) => {

        res.json({
            status: 200,
            message: "sucess",
            data: data || err
        });

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