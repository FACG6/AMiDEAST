const postApplyCourse = require('../../database/queries/postApplyCourse');

exports.applyCourse = (req, res) => {
  const { id, datesId, courseId } = req.body;
  postApplyCourse(courseId, id, datesId)
    .then((appliedCourse) => {
      if (!appliedCourse.rowsCount) {
        res.send({
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
