const joi = require('joi');

const {
  checkStudent,
  checkStaff,
} = require('../../database/queries/checkuser');
const { loginSchema } = require('../../helpers/validation-schema');
const { createCookie } = require('../../helpers/createCookie');

module.exports = (req, res) => {
  const { id, password } = req.body;
  const { error } = joi.validate({ id, password }, loginSchema);
  if (error) {
    res.status(400).send({
      error: error.details[0].message,
    });
  } else {
    checkStudent(id)
      .then(({ rows: student }) => {
        if (!student[0]) {
          checkStaff(id)
            .then(({ rows: staff }) => {
              if (staff[0]) {
                if (password.toString() === staff[0].password) {
                  const payLoad = { id, role: 'staff' };
                  const jwt = createCookie(payLoad);
                  res.cookie('jwt', jwt, { maxAge: 7200000 });
                  res.status(200).send({ id, role: 'staff', status: 200 });
                } else { res.status(400).send({ error: 'Check your Id Or Password' }); }
              } else { res.status(400).send({ error: 'Check your Id Or Password' }); }
            })
            .catch(e => res.status(400).send({ error: 'Bad Request' }));
        } else if (password.toString() === student[0].password) {
          const payLoad = { id, role: 'student', level: student[0].level };
          const jwt = createCookie(payLoad);
          res.cookie('jwt', jwt, { maxAge: 7200000 });
          res.status(200).send({ id, role: 'student', status: 200 });
        } else res.status(400).send({ error: 'Check your Id Or Password' });
      })
      .catch(e => res.status(400).send({ error: 'Bad Request' }));
  }
};
