const joi = require('joi');
const { insertStudent } = require('../../database/queries/addStudent');
const { studentSchema } = require('../../helpers/validation-schema');

const addStudent = (req, res) => {
  const {
    firstname, lastname, phonenumber, mobilenumber, address, level, password,
  } = req.body;
  const userInfo = {
    firstname, lastname, phonenumber, mobilenumber, address, level, password,
  };

  const { error } = joi.validate({ ...req.body }, studentSchema);
  if (error) {
    res.send({ msg: error.details[0].message });
  } else {
    insertStudent(userInfo)
      .then(({ rows: student }) => {
        if (!student[0]) res.status(400).send({ error: 'Student dose not added' });
        else res.status(201).send({ data: student[0] });
      })
      .catch(() => res.status(500).send({ error: 'Sorry we have some issues' }));
  }
};

module.exports = { addStudent };
