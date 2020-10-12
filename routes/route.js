var router = require('express').Router();

var course = require('../routes/course.route'),
    courseCategory = require('../routes/courseCategory.route'),
    typeTask = require('../routes/typeTask.route'),
    task = require('../routes/task.route'),
    chapter = require('../routes/chapter.route');


router.use('/courses', course);
router.use('/course_categories', courseCategory);
router.use('/type_tasks', typeTask);
router.use('/tasks', task);
router.use('/chapters', chapter);

// Export API routes
module.exports = router;