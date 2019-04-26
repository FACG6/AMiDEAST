const router = require('express').Router();

const { get } = require('./get');

router
  .route('/:id')
  .get(get);

module.exports = router;
