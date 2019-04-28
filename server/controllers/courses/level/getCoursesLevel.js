const getCoursesByLevel = require('../../../database/queries/getCoursesLevel');

exports.getCoursesLevel = (req, res) => {
  const { level } = req.params;
  getCoursesByLevel(level)
    .then((courses) => {
      if (!courses.rowCount) {
        res.status(404).send({
          error: 'No courses available for this level',
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
