const getStudentsByCourse = require('../../../database/queries/getStudentsCourse');

exports.getStudents = (req, res) => {
  const { courseId } = req.params;
  getStudentsByCourse(courseId)
    .then((students) => {
      if (!students.rowCount) {
        res.send({
          error: 'No students for this course',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: students.rows,
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Sorry we have some issues',
      data: null,
    }));
};
