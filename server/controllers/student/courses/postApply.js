const postApplyCourse = require('../../../database/queries/postApplyCourse');

exports.post = (req, res) => {
  postApplyCourse(1, 12345, 2)
    .then((appliedCourse) => {
      if (!appliedCourse.rowsCount) {
        res.send({
          error: null,
          data: 'Course add succesfuly',
        });
      } else {
        res.send({
          error: 'Coures add failed',
          data: null,
        });
      }
    })
    .catch((err) => {
      res.send({
        error: err,
        data: null,
      });
    });
};
