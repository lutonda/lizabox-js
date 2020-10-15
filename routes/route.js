var router = require('express').Router();

var course = require('../routes/course.route'),
    courseCategory = require('../routes/courseCategory.route'),
    typeTask = require('../routes/typeTask.route'),
    task = require('../routes/task.route'),
    sys = require('../routes/system.route'),
    role = require('../routes/role.route'),
    association = require('../routes/association.route'),
    people = require('../routes/people.route'),
    chapter = require('../routes/chapter.route');


router.use('/courses', course);
router.use('/course_categories', courseCategory);
router.use('/type_tasks', typeTask);
router.use('/tasks', task);
router.use('/chapters', chapter);
router.use('/system', sys);
router.use('/roles', role);
router.use('/peoples', people);
router.use('/associations', association);

// Export API routes
module.exports = router;