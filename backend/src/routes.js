const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/menu', require('./menu'));
router.use('/orders', require('./orders'));
router.use('/order', require('./order'));

module.exports = router;