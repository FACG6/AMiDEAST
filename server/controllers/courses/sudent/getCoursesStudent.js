const { getCoursesStudent, appliedCourse } = require('../../../database/queries/getCoursesStudent');

const get = (req, res) => {
  const { studentId } = req.params;
  getCoursesStudent(studentId)
    .then((courses) => {
      if (!courses.rowCount) {
        res.status(404).send({
          error: 'No courses for this student',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: courses.rows,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        error: 'Sorry we have some issues',
        data: null,
      });
    });
};

module.exports = { get };
