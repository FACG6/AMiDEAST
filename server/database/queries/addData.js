const connction = require('../config/db_connection');

const addCourses = (courseName, description, level, numberofstudent, publishDates) => connction.query('INSERT INTO course(title,description, target_level,number_of_student,publish_date) values($1,$2,$3,$4,$5) returning *', [courseName, description, level, numberofstudent, publishDates]);

module.exports = { addCourses };
