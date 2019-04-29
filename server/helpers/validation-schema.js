const joi = require('joi');

exports.addCourseShema = joi.object().keys({
  title: joi.string().alphanum().min(3).max(30)
    .required(),
  numberOfStudent: joi.number().integer().min(0).max(50),
  description: joi.string().min(10).max(500),
  level: joi.number().integer().min(1).max(12),
  days: joi.string().min(3).max(50),
  start: joi.number().integer().min(8).max(17),
  end: joi.number().integer().min(9).max(18),
});
