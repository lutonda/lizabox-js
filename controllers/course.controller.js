var Course = require('../models/course');
var Category = require('../models/courseCategory');

exports.create = async (req, res) => {

    //let category = req.body.category._id;
    req.body.category = await Category.findById(req.body.category._id);

    last = await Course.findOne({}, {}, { sort: { 'createdAt': -1 } })
    req.body.code = (last.code || 100) + 3.037

    let course = await Course.create(req.body);
    //course.category = await Category.findById(category);

    res.json({
        status: 200,
        message: "success",
        data: course
    })
}


exports.update = async (req, res) => {

    let course = await Course.findById(req.params.id, async (err, course) => {

        if (req.body.description)
            course.description = req.body.description;
        if (req.body.name)
            course.name = req.body.name;
        if (req.body.category && req.body.category._id) {
            let category = req.body.category._id;
            req.body.category = null;
            course.category = await Category.findById(category);
        }

        course.save();

        res.json({
            status: 200,
            message: "sucess",
            data: course || err
        });

    });
}

exports.findOneBy = async (req, res) => {

    let course = await Course.findById(req.params.id)
        .populate('chapters')
        //.populate('associations')
        .populate({
            path: 'associations',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: { path: 'people role' }
        })
        .populate('chapters.tasks');
        
    course.coverPic='http://127.0.0.1:8800/uploads/courses/' + course.code + '/cover.jpg'
    res.json({
        status: 200,
        message: "sucess",
        data: course 
    })

}

exports.findAllBy = async (req, res) => {
    let courses = await Course.find().populate('category');
    courses.forEach(async course=>{
        if(course.code) return;
        last = await Course.findOne({}, {}, { sort: { 'createdAt': -1 } })
        course.code = (last.code || 100) + 3.037
        course.save()
    })
    res.json({
        status: 200,
        message: "success",
        data: courses
    })
}

exports.delete = async (req, res) => {

    let course = await Course.findById(req.params.id, (err, data) => {

        course.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });


}