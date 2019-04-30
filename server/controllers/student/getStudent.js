const getStudentInformation = require('../../database/queries/getStudent');

const getStudent = (req, res) => {
  const { id } = req.params;
  getStudentInformation(id)
    .then((student) => {
      if (!student.rowCount) {
        res.status(404).send({
          error: 'The student dose not exist',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: student.rows[0],
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Sorry we have some issues',
      data: null,
    }));
};

module.exports = { getStudent };
