const connection = require("../config/db_connection");

const getCoursesByLevel = level =>
  connection.query(
    `
SELECT * FROM course inner join dates on dates.course_id = course.id WHERE target_level = $1`,
    [level]
  );

const avaliableCourses = (level, studentId) =>
  connection.query(
    `
select * from course
inner join student_course on course.id = student_course.course_id 
where course.target_level = 7
and student_course.student_id = 12345 
and course.id != student_course.course_id`,
    [level, studentId]
  );

module.exports = { getCoursesByLevel, avaliableCourses };
