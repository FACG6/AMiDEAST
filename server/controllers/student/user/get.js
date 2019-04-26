const getStudentInformation = require('../../../database/queries/getStudent');

exports.get = (req, res) => {
  getStudentInformation('12345')
    .then((information) => {
      res.send({
        error: null,
        data: information.rows,
      });
    })
    .catch(err => res.send({
      error: err,
      data: null,
    }));
};
