const joi = require('joi');

const { insertCourse, insertDates } = require('../../database/queries/addCourse');
const { addCourseSchema } = require('../../helpers/validation-schema');

exports.addCourse = (req, res) => {
  const {
    title,
    description,
    level,
    numberOfStudent,
    start,
    end,
    days,
  } = req.body.value;
  const { dates } = req.body.value;
  const courseInformation = {
    courseInfo: {
      title, description, level, numberOfStudent,
    },
    datesInfo: dates,
  };

  const { error } = joi.validate({
    title, description, level, numberOfStudent, start, end, days,
  }, addCourseSchema);
  if (error) {
    console.log(error);
    res.status(400).send({
      msg: error.details[0].message,
      data: null,
    });
  } else {
    insertCourse(courseInformation.courseInfo)
      .then(({ rows: course }) => {
        console.log(course);
        if (!course[0]) throw new Error({ internalError: 'Bad Request' });
        else {
          return courseInformation.datesInfo.map((date) => {
            console.log(date.start);
            insertDates({ start: date.start, end: date.end, days: date.days }, course[0].id);
          });
        }
      })
      .then(({ rows: datesinfo }) => {
        console.log(1111111, datesinfo[0]);
        if (!datesinfo[0]) throw new Error({ internalError: 'Bad Request' });
        return res.status(201).send({
          data: courseInformation,
        });
      })
      .catch(({ internalError }) => {
        if (internalError) res.status(500).send({ error: internalError });
        else res.status(500).send({ error: 'internal server error' });
      });
  }
};
