const { getStudentsByCourse } = require('../../../database/queries/getStudentsCourse');

const getStudents = (req, res) => {
  const { courseId } = req.params;
  getStudentsByCourse(courseId)
    .then((students) => {
      if (!students.rowCount) {
        res.status(404).send({
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

module.exports = { getStudents };
