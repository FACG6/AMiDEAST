const connection = require('../config/db_connection');

const getCoursesByLevel = level => connection.query(`
SELECT * FROM course inner join dates on dates.course_id = course.id WHERE target_level = $1`, [level]);

const avaliableCourses = (level, studentId) => connection.query(`
select * from dates
inner join course on course.id = dates.course_id
where course.target_level = $1 and course.id != (select id from 
(select student_course.course_id from student_course 
inner join course ON course.id = student_course.course_id where student_course.student_id = $2) as course 
inner join (select course.id from dates inner join course on course.id = dates.course_id
where course.target_level = $1) as student_course
ON course = student_course)`, [level, studentId]);

module.exports = { getCoursesByLevel, avaliableCourses };
