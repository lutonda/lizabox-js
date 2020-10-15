let Role = require('../models/role')


exports.create = async (req, res) => {

    let role = await Role.create(req.body)

    res.json(
        {
            status: 200,
            message: "success",
            data: role
        });

}

exports.findAllBy = async (req, res) => {
    let roles = await Role.find({});

    res.json({ status: 200, message: "success", data: roles });

}

exports.findOneBy = async (req, res) => {
    let role = await Role.findById(req.params.id)

        res.json({
            status: 200,
            message: "sucess",
            data: role 
        })
    


}