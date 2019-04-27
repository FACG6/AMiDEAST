const getAvailableCourses = require('../../../database/queries/getAllCourses');

exports.getAll = (req, res) => {
  const { level } = req.body;
  getAvailableCourses(level)
    .then((allCourses) => {
      if (!allCourses.rowCount) {
        res.send({
          error: 'No courses available for this level',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: allCourses.rows,
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
