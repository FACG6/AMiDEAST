const { deleteCourse } = require('../../database/queries/deleteCourse');

const deleteCourseById = (req, res) => {
  const { id } = req.params;
  deleteCourse(id)
    .then((course) => {
      if (!course.rowCount) {
        res.status(404).send({
          error: 'The course dose not exist',
          data: null,
        });
      } else {
        res.status(202).send({
          error: null,
          data: 'Deleted Successfully',
        });
      }
    })
    .catch(() => res.status(500).send({
      error: 'Sorry we have some issues',
      data: null,
    }));
};

module.exports = { deleteCourseById };
