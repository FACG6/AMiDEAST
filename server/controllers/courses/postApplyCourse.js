const joi = require('joi');

const { postApplyCourse } = require('../../database/queries/postApplyCourse');
const { applyCourseSchema } = require('../../helpers/validation-schema');

const applyCourse = (req, res) => {
  const { id } = req.params;
  const { id: datesId, student_id } = req.body;
  const applyInfo = { datesId, student_id };
  const { error } = joi.validate(applyInfo, applyCourseSchema);
  if (error) {
    res.status(400).send({
      data: null,
      error: error.details[0].message,
    });
  } else {
    postApplyCourse(id, student_id, datesId)
      .then((appliedCourse) => {
        if (!appliedCourse.rowsCount) {
          res.status(201).send({
            error: null,
            data: 'Course added succesfuly',
          });
        } else {
          res.status(400).send({
            error: 'Course added failed',
            data: null,
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          error: 'Course add failed',
          data: null,
        });
      });
  }
};

module.exports = { applyCourse };
