var route = require('express').Router();
var controller = require('../controllers/system.controller');

const multer = require('multer');
const path = require('path');
var shell = require('shelljs');

let helpers = require('../helpers/system.helper')

const storage = multer.diskStorage({
    destination: function(req, file, callBack) {
        let path='public/uploads/' + (req.query.path||'').replace('-','/');
        shell.mkdir('-p', path)
        callBack(null, path);
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, callBack) {
        req.query.fileName = req.query.fileName || file.fieldname + '-' + Date.now()
        callBack(null, req.query.fileName + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage, fileFilter: helpers.imageFilter });


/*route.get('/', controller.findAllBy);
route.get('/:id', controller.findOneBy);
route.post('/update/:id', controller.update);
route.delete('/delete/:id', controller.delete);*/
route.post('/files/upload', upload.single('file'), controller.fileUpload);

module.exports = route;