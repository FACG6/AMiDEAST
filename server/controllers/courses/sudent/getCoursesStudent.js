const getCoursesStudent = require('../../../database/queries/getCoursesStudent');

exports.get = (req, res) => {
  const { studentId } = req.params;
  getCoursesStudent(studentId)
    .then((courses) => {
      if (!courses.rowCount) {
        res.send({
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
