const joi = require('joi');
const { putStudent } = require('../../database/queries/updateStudent');
const { studentSchema } = require('../../helpers/validation-schema');

exports.updateStudent = (req, res) => {
  const {
    firstname, lastname, phonenumber, mobilenumber, address, level, password,
  } = req.body;
  const userInfo = {
    firstname, lastname, phonenumber, mobilenumber, address, level, password,
  };

  const { error } = joi.validate(userInfo, studentSchema);
  if (error) {
    res.send({
      error: error.details[0].message,
      data: null,
    });
  } else {
    const { id } = req.params;
    putStudent({ ...userInfo }, id)
      .then((updatedStudent) => {
        if (!updatedStudent.rowCount) {
          res.status(404).send({
            error: 'student not found',
            data: null,
          });
        } else {
          res.status(202).send({
            data: 'Updated successfully',
            error: null,
          });
        }
      })
      .catch(() => res.status(500).send({
        error: 'Sorry we have some issues',
        data: null,
      }));
  }
};
