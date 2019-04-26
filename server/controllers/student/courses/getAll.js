const getAvailableCourses = require('../../../database/queries/getAllCourses');

exports.getAll = (req, res) => {
  getAvailableCourses('2')
    .then((allCourses) => {
      res.send({
        error: null,
        data: allCourses.rows,
      });
    })
    .catch((error) => {
      res.send({
        error,
        data: null,
      });
    });
};
