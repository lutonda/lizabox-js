var TypeTask = require('../models/typeTask');

exports.create = async(req, res) => {

    let typeTask = await TypeTask.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: typeTask
    })
}


exports.update = async(req, res) => {

    let typeTask = await TypeTask.findById(req.params.id, (err, typeTask) => {

        typeTask.description = req.body.description;
        typeTask.name = req.body.name;
        typeTask.save();

        res.json({
            status: 200,
            message: "sucess",
            data: typeTask || err
        });

    });
}

exports.findOneBy = async(req, res) => {

    await TypeTask.findById(req.params.id, (err, data) => {

        res.json({
            status: 200,
            message: "sucess",
            data: data || err
        });

    });
}

exports.findAllBy = async(req, res) => {
    let typeTasks = await TypeTask.find();

    res.json({
        status: 200,
        message: "success",
        data: typeTasks
    })
}

exports.delete = async(req, res) => {

    let typeTask = await TypeTask.findById(req.params.id, (err, data) => {

        typeTask.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });


}