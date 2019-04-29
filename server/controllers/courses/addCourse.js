const joi = require('joi');

const { insertCourse, insertDates } = require('../../database/queries/addCourse');
const { addCourseSchema } = require('../../helpers/validation-schema');

exports.addCourse = (req, res) => {
  const { title,
    description,
    level,
    numberOfStudent,
    start,
    end,
    days,
  } = req.body;

  const courseInofrmation = {
    courseInfo: { title, description, level, numberOfStudent },
    datesInfo: { start, end, days },
  };
  const { error } = joi.validate({ ...courseInofrmation.courseInfo, ...courseInofrmation.datesInfo }, addCourseSchema);
  if (error) {
    res.status(400).send({
      msg: error.details[0].message,
      data: null,
    });
  } else {
    insertCourse(courseInofrmation.courseInfo)
      .then(({ rows: course }) => {
        if (!course[0]) throw new Error({ internalError: 'Bad Request' });
        return insertDates(courseInofrmation.datesInfo, course[0].id);
      })
      .then(({ rows: dates }) => {
        if (!dates[0]) throw new Error({ internalError: 'Bad Request' });
        return res.status(201).send({
          data: courseInofrmation,
        });
      })
      .catch(({ internalError }) => {
        if (internalError) res.status(500).send({ error: internalError });
        else res.status(500).send({ error: 'internal server error' });
      });
  }
};
