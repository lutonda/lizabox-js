var People = require('../models/people');
var User = require('../models/user');

exports.create = async (req, res) => {

    //let category = req.body.category._id;
    await User.findOrCreate({ email: req.body.email }, async (err, user) => {

        last = await People.findOne({}, {}, { sort: { 'createdAt': -1 } })
        req.body.code = (last.code || 100) + 3.175

        let people = await People.create(req.body);
        people.user = user;
        people.save()
        user.people = people;
        user.save()

        res.json({
            status: 200,
            message: "success",
            data: people
        })
    });

}


exports.update = async (req, res) => {

    let user = await User.findOneAndUpdate({ people: req.params.id }, req.body, { upsert: true ,new: true, useFindAndModify:false})
    let people = await People.findByIdAndUpdate(req.params.id , req.body, { new: true})

    people.user = user;
    people.save();
    user.people = people;
    user.save()

    res.json({
        status: 200,
        message: "sucess",
        data: people
    });

}

exports.findOneBy = async (req, res) => {

    let people = await People.findById(req.params.id)
        .populate('chapters')
        //.populate('associations')
        .populate({
            path: 'associations',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: { path: 'people role' }
        })
        .populate('chapters.tasks');

    people.coverPic = 'http://127.0.0.1:8800/uploads/courses/' + people.code + '/cover.jpg'
    res.json({
        status: 200,
        message: "sucess",
        data: people
    })

}

exports.findAllBy = async (req, res) => {
    let people = await People.find().populate('user');
    res.json({
        status: 200,
        message: "success",
        data: people
    })
}

exports.delete = async (req, res) => {

    let people = await People.findById(req.params.id, (err, data) => {

        people.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });


}