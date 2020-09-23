var Course = require('../models/coruse');


exports.createOne = async(req, res) => {

    let course = await Course.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: course
    })
}


exports.upadateOne = async(req, res) => {

    let course = await Course.findById(req.params.id, (err, course) => {

        course.description = req.body.description;
        course.name = req.body.name;
        course.save();

        res.json({
            status: 200,
            message: "sucess",
            data: course || err
        });

    });
}

exports.findOneBy = async(req, res) => {

    await Course.findById(req.params.id, (err, data) => {

        res.json({
            status: 200,
            message: "sucess",
            data: data || err
        });

    });
}

exports.findAllBy = async(req, res) => {
    let authors = await Course.find();

    res.json({
        status: 200,
        message: "success",
        data: authors
    })
}

exports.deleteOne = async(req, res) => {

    let course = await Course.findById(req.params.id, (err, data) => {

        course.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });


}