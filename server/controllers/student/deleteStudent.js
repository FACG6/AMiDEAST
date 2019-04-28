const { updateStudentStatus, deleteStudent } = require('../../database/queries/deleteStudent');

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  updateStudentStatus(id)
    .then((student) => {
      if (!student.rowCount) {
        return res.status(404).send({
          error: 'student not found',
          data: null,
        });
      } return deleteStudent(id);
    }).then((studentInfo) => {
      if (!studentInfo.rowCount) {
        res.status(404).send({
          error: 'student not found ',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: 'Deleted successfully',
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
