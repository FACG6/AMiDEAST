const { insertCourse } = require('../../database/queries/addCourse');

exports.addCourse = (req, res) => {
  insertCourse({ ...req.body })
    .then((course) => {
      if (!course.rowCount) {
        res.status(400).send({
          error: 'Course not added database',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: course.rows[0],
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Internal server error',
      data: null,
    }));
};
