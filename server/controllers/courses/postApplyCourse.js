const { postApplyCourse } = require('../../database/queries/postApplyCourse');

const applyCourse = (req, res) => {
  const { id } = req.params;
  const { datesId, studentid } = req.body;
  postApplyCourse(id, studentid, datesId)
    .then((appliedCourse) => {
      if (!appliedCourse.rowsCount) {
        res.status(201).send({
          error: null,
          data: 'Course added succesfuly',
        });
      } else {
        res.status(500).send({
          error: 'Course added failed',
          data: null,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        error: 'Course add failed',
        data: null,
      });
    });
};

module.exports = { applyCourse };
