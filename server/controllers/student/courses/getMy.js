const getStudentCourses = require('../../../database/queries/getMyCourses');

exports.getMy = (req, res) => {
  getStudentCourses(12345)
    .then((myCourses) => {
      res.send({
        error: null,
        data: myCourses.rows,
      });
    })
    .catch((err) => {
      res.send({
        error: err,
        data: null,
      });
    });
};
