var CourseCategory = require('../models/courseCategory');

exports.create = async(req, res) => {

    let courseCategory = await CourseCategory.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: courseCategory
    })
}


exports.update = async(req, res) => {

    let courseCategory = await CourseCategory.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });


    res.json({
        status: 200,
        message: "sucess",
        data: courseCategory
    });
}

exports.findOneBy = async(req, res) => {

    await CourseCategory.findById(req.params.id, (err, data) => {

        res.json({
            status: 200,
            message: "sucess",
            data: data || err
        });

    });
}

exports.findAllBy = async(req, res) => {
    let courseCategories = await CourseCategory.find();

    res.json({
        status: 200,
        message: "success",
        data: courseCategories
    })
}

exports.delete = async(req, res) => {

    let courseCategory = await CourseCategory.findById(req.params.id, (err, data) => {

        courseCategory.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });

}