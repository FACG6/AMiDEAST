const getStudentsByLevel = require('../../../database/queries/getStudentsLevel');

const getStudents = (req, res) => {
  const { level } = req.params;
  getStudentsByLevel(level)
    .then((students) => {
      if (!students.rowCount) {
        res.status(404).send({
          error: 'No students for this level',
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
