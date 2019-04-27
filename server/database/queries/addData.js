const connction = require('../config/db_connection');

const addCourses = (courseName, description, level, numberofstudent, publishDates) => connction.query('INSERT INTO course(title,description,targetLevel,numberOfStudent,publishDate) values($1,$2,$3,$4,$5) returning *', [courseName, description, level, numberofstudent, publishDates]);

module.exports = { addCourses };
