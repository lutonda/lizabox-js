exports.index = function(req, res, next) {
    res.render("api", { title: "Hey", message: "Hello there!" });
};

exports.fileUpload = async function(req, res, next) {

    res.json({
        status: 200,
        message: "success",
        data: null
    })

};