const getCoursesByLevel = require('../../../database/queries/getCoursesLevel');

exports.getCoursesLevel = (req, res) => {
  const { level } = req.params;
  const { studentId } = req.body;
  getCoursesByLevel(level, studentId)
    .then((courses) => {
      if (!courses.rowCount) {
        res.send({
          error: null,
          data: [],
        });
      } else {
        res.send({
          data: courses.rows,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        error: 'Sorry we have some issues',
      });
    });
};
