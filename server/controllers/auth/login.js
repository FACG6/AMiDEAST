const joi = require('joi');

const { checkStudent, checkStaff } = require('../../database/queries/checkuser');
const { loginSchema } = require('../../helpers/validation-schema');
const { createCookie } = require('../../helpers/createCookie');

module.exports = (req, res) => {
  const { id, password } = req.body;
  const { error } = joi.validate({ id, password }, loginSchema);
  if (error) {
    res.status(400).send({
      data: null,
      error: error.details[0].message,
    });
  } else if (id.length === 5) {
    checkStudent(id, password)
      .then((result) => {
        if (result.rowCount) {
          const payLoad = {
            id: result.rows[0].id,
            role: 'student',
          };
          const jwt = createCookie(payLoad);
          res.cookie('jwt', jwt, {
            maxAge: 7200000,
            httpOnly: true,
          });
          res.send({
            error: null,
            data: result.rows,
          });
        } else {
          res.send({
            error: null,
            data: result.rows,
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          error: 'Internal Server Error',
          data: null,
        });
      });
  } else if (id.length === 6) {
    checkStaff(id, password)
      .then((result) => {
        if (result.rowCount) {
          const payLoad = {
            id: result.rows[0].id,
            role: 'admin',
          };
          const jwt = createCookie(payLoad);
          res.cookie('jwt', jwt, {
            maxAge: 7200000,
            httpOnly: true,
          });
          res.send({
            error: null,
            data: result.rows,
          });
        } else {
          res.send({
            error: null,
            data: result.rows,
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          error: 'Internal Server Error',
          data: null,
        });
      });
  }
};
