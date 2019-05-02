const { getCoursesByLevel, avaliableCourses} = require('../../../database/queries/getCoursesLevel');
// const { appliedCourse, avaliableCourses} = require('../../../database/queries/getCoursesLevel');
// const avaliableCourses = require('../../../database/queries/getCoursesLevel')

exports.getCoursesLevel = (req, res) => {
  const { level } = req.params;
  const { student_id } = req.body;
  avaliableCourses(level, student_id)
    .then((courses) => {
      if (!courses.rowCount) {
        res.send({
          error: null,
          data: [],
        });
      } else {
        res.send({
          error: null,
          data: courses.rows,
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
