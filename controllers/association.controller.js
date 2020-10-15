var Association = require('../models/association');
var People = require('../models/people');
var Role = require('../models/role');
var Course = require('../models/course');

exports.create = async (req, res) => {
    let association
    
    req.body.role = await Role.findById(req.body.role._id);
    req.body.course = await Course.findById(req.body.course._id);
    
    req.body.peoples.forEach(async people => {
        People.findOrCreate({ email: people.email }, async (err, data) => {
            req.body.people = data
            association=await Association.create(req.body);
            req.body.people.associations.push(association);
            req.body.people.save();
            req.body.course.associations.push(association);
            req.body.course.save();
        }); 
    })

    res.json({
        status: 200,
        message: "success",
        data: association
    })
}

exports.update = async (req, res) => {

    let association = await Association.findById(req.params.id, async (err, association) => {

        if (req.body.description)
            association.description = req.body.description;
        if (req.body.name)
            association.name = req.body.name;
        if (req.body.category && req.body.category._id) {
            let category = req.body.category._id;
            req.body.category = null;
            association.category = await Category.findById(category);
        }

        association.save();

        res.json({
            status: 200,
            message: "sucess",
            data: association || err
        });

    });
}

exports.findOneBy = async (req, res) => {

    let association = await Association.findById(req.params.id).populate('chapters').populate('chapters.tasks');

    res.json({
        status: 200,
        message: "sucess",
        data: association
    })

}

exports.findAllBy = async (req, res) => {
    
    let courses = await Association.find().populate('category');

    res.json({
        status: 200,
        message: "success",
        data: courses
    })
}

exports.delete = async (req, res) => {

    let association = await Association.findById(req.params.id, (err, data) => {

        association.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null
        });
    });
}