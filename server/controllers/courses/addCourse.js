const insertCourse = require('../../database/queries/addCourse');

exports.addCourse = (req, res) => {
  insertCourse({ ...req.body })
    .then((course) => {
      if (!course.rowCount) {
        res.send({
          error: 'Course not added database',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: course.rows,
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Internal server error',
      data: null,
    }));
};
