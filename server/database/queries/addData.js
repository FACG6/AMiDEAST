
const connction = require('../config/db_connection');

const addStudent = (firstname, lastname, Address, IsActive, AmideastId, phonenumber, mobilenumber, level, password) => connction.query('INSERT INTO student(firstname,lastname,address,amideastId,isActive,homePhone,mobilePhone,level,password) values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *', [firstname, lastname, Address, IsActive, AmideastId, phonenumber, mobilenumber, level, password]);

module.exports = { addStudent };
