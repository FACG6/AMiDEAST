const joi = require('joi');

const { insertCourse, insertDates } = require('../../database/queries/addCourse');
const { addCourseSchema } = require('../../helpers/validation-schema');

exports.addCourse = (req, res) => {
  const { error } = joi.validate({ ...req.body }, addCourseSchema);
  if (error) {
    res.send({ msg: error.details[0].message });
  } else {
    const {
      title, description, level, numberOfStudent,
    } = req.body;
    const courseInfo = {
      title, description, level, numberOfStudent,
    };
    const { start, end, days } = req.body;
    const datesInfo = { start, end, days };
    insertCourse(courseInfo)
      .then(({ rows: course }) => {
        if (!course[0]) throw new Error('Bad Request');
        return insertDates(datesInfo, course[0].id);
      })
      .then(({ rows: dates }) => {
        if (!dates[0]) throw new Error('Bad Request');
        return res.status(201).send({ data: { ...req.body } });
      })
      .catch(error => res.status(400).send({ error }));
  }
};
