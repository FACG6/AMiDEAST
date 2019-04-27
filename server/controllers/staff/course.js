const { addCourses } = require('../../database/queries/addData');

exports.postAddCourse = (req, res) => {
  const {
    courseName, description, level, numberofstudent, publishDates,
  } = req.body;
  addCourses(courseName, description, level, numberofstudent, publishDates)
    .then((Course) => {
      res.send({
        error: null,
        data: Course.rows,
      });
    })
    .catch((err) => {
      res.send({
        error: err,
        data: null,
      });
    });
};
