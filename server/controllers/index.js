const router = require('express').Router();
const staff = require('./staff');

router.use('/staff', staff);

module.exports = router;
