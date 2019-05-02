const {
  avaliableCourses
} = require("../../../database/queries/getCoursesLevel");

exports.getCoursesLevel = (req, res) => {
  const { level } = req.params;
  avaliableCourses(level)
    .then(courses => {
      if (!courses.rowCount) {
        res.send({
          error: null,
          data: []
        });
      } else {
        res.send({
          data: courses.rows
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        error: "Sorry we have some issues"
      });
    });
};
