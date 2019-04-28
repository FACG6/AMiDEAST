const getCourseInformation = require('../../database/queries/getCourse');

const getCourse = (req, res) => {
  const { id } = req.params;
  getCourseInformation(id)
    .then((course) => {
      if (!course.rowCount) {
        res.status(404).send({
          error: 'Course not found',
          data: null,
        });
      } else {
        res.send({
          error: null,
          data: course.rows,
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

module.exports = { getCourse };
