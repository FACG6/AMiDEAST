const { getStudentsInformation } = require('../../database/queries/getStudents');

const getStudents = (req, res) => {
  getStudentsInformation()
    .then((students) => {
      if (!students.rowCount) {
        res.send({
          error: 'No students in the database',
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
