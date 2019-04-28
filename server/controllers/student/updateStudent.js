const putStudent = require('../../database/queries/updateStudent');

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  putStudent({ ...req.body }, id)
    .then((updatedStudent) => {
      if (!updatedStudent.rowCount) {
        res.send({
          error: 'student not found ',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: 'Updated successfully',
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Sorry we have some issues',
      data: null,
    }));
};
