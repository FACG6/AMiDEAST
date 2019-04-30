const router = require('express').Router();

const { getUserInformation } = require('./get');

router
  .route('/:id')
  .get(getUserInformation);

module.exports = router;
