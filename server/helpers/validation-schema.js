const joi = require('joi');

exports.addCourseSchema = joi.object().keys({
  title: joi.string().min(3).max(30),
  numberOfStudent: joi.number().integer().min(0).max(50),
  description: joi.string().min(10).max(500),
  level: joi.number().integer().min(1).max(12),
  days: joi.string().min(3).max(50),
  start: joi.number().integer().min(8).max(17),
  end: joi.number().integer().min(9).max(18),
  dates: joi.array().items(joi.object()),
});

exports.studentSchema = joi.object().keys({
  firstname: joi.string().min(3).max(15),
  lastname: joi.string().min(3).max(15),
  phonenumber: joi.string().min(7).max(10),
  mobilenumber: joi.string().min(6).max(8),
  address: joi.string().min(3).max(50),
  level: joi.number().integer().min(0).max(12),
  password: joi.string().min(3),
});

exports.applyCourseSchema = joi.object().keys({
  datesId: joi.number().integer(),
  studentid: joi.number().integer(),
});
