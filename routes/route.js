var router = require('express').Router();

var course = require('../routes/course.route'),
    typeTask = require('../routes/typeTask.route'),
    task = require('../routes/task.route'),
    chapter = require('../routes/chapter.route');


router.use('/courses', course);
router.use('/type_task', (res, req, next) => next(), typeTask);
router.use('/task', (res, req, next) => next(), task);
router.use('/chapter', (res, req, next) => next(), chapter);

// Export API routes
module.exports = router;