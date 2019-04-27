const postApplyCourse = require('../../../database/queries/postApplyCourse');

exports.post = (req, res) => {
  const { id, datesId, courseId } = req.body;
  postApplyCourse(courseId, id, datesId)
    .then((appliedCourse) => {
      if (!appliedCourse.rowsCount) {
        res.send({
          error: null,
          data: 'Course add succesfuly',
        });
      } else {
        res.status(500).send({
          error: 'Course add failed',
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
