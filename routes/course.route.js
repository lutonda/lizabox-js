var route = require('express').Router();
var controller = require('../controllers/course.controller');

route.get('/', controller.findAllBy);
route.get('/:id', controller.findOneBy);
route.put('/update/:id', controller.update);
route.delete('/delete/:id', controller.delete);
route.post('/create', controller.create);

module.exports = route;