const getStudentCourses = require('../../../database/queries/getMyCourses');

exports.getMy = (req, res) => {
  const { id } = req.body;
  getStudentCourses(id)
    .then((myCourses) => {
      if (!myCourses.rowCount) {
        res.send({
          error: 'No courses are applied for this student',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: myCourses.rows,
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
