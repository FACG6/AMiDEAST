const getCoursesInformation = require('../../database/queries/getCourses');

exports.getAllCourses = (req, res) => {
  getCoursesInformation()
    .then((courses) => {
      if (!courses.rowCount) {
        res.send({
          error: 'No courses in the in the database',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: courses.rows,
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
