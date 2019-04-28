const { insertStudent } = require('../../database/queries/addStudent');

const addStudent = (req, res) => {
  insertStudent({ ...req.body })
    .then((student) => {
      if (!student.rowCount) {
        res.send({
          error: 'Student dose not added',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: student.rows,
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Sorry we have some issues',
      data: null,
    }));
};

module.exports = { addStudent };
