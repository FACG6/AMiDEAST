const joi = require('joi');

const { insertStudent } = require('../../database/queries/addStudent');
const { studentSchema } = require('../../helpers/validation-schema');

const addStudent = (req, res) => {
  const {
    firstname,
    lastname,
    phonenumber,
    mobilenumber,
    address,
    level,
    password,
  } = req.body;

  const userInfo = {
    firstname,
    lastname,
    phonenumber,
    mobilenumber,
    address,
    level,
    password,
  };

  const { error } = joi.validate({ ...req.body }, studentSchema);
  if (error) {
    res.status(400).send({
      error: error.details[0].message,
      data: null,
    });
  } else {
    insertStudent(userInfo)
      .then(({ rows: student }) => {
        if (!student[0]) {
          res.status(400).send({
            error: 'Student dose not added',
            data: null,
          });
        } else {
          res.status(201).send({
            data: student[0],
            error: null,
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          error: 'Sorry we have some issues',
          data: null,
        });
      });
  }
};

module.exports = { addStudent };
