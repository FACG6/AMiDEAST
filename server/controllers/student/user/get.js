const getStudentInformation = require('../../../database/queries/getStudent');

exports.getUserInformation = (req, res) => {
  const { id } = req.params;
  getStudentInformation(id)
    .then((information) => {
      if (!information.rowCount) {
        res.status(404).send({
          error: 'The student dose not exist',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: information.rows,
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Sorry we have some issues',
      data: null,
    }));
};
