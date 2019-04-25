
const connction = require('../config/db_connection');

const addStudent = (firstName, lastName, amideastId, isActive, phoneNumber, mobileNumber, address, level, password) => connction.query('INSERT INTO student(firstname,lastname,id, is_active, home_phone,mobile_phone,address,level,password) values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *', [firstName, lastName, amideastId, isActive, phoneNumber, mobileNumber, address, level, password]);

module.exports = { addStudent };
