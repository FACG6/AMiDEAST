const connection = require('../config/db_connection');

exports.insertCourse = (courseInfo) => {
  const queryValues = Object.values(courseInfo);
  const sql = {
    text: 'INSERT INTO course(title, description, target_level, number_of_student, publish_date) values ($1, $2, $3, $4, $5)  RETURNING *',
    values: [...queryValues, new Date()],
  };
  return connection.query(sql);
};

exports.insertDates = (datesInfo, courseid) => {
  const queryValues = Object.values(datesInfo);
  const sql = {
    text: 'INSERT INTO dates(h_from, h_to, days, course_id) values ($1, $2, $3, $4)  RETURNING *',
    values: [...queryValues, courseid],
  };
  return connection.query(sql);
};
