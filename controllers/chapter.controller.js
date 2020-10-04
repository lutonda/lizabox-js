var Chapter = require('../models/chapter');


exports.create = async(req, res) => {

    let chapter = await Chapter.create(req.body);

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

    await Chapter.findById(req.params.id, (err, data) => {

        res.json({
            status: 200,
            message: "sucess",
            data: data || err
        });

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