const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/menu', require('./menu'));

module.exports = router;