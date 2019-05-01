const checkCookie = require('../../helpers/checkCookie');

module.exports = (req, res) => {
  if (req.cookies && req.cookies.jwt) {
    checkCookie(req.cookies.jwt)
      .then((payload) => {
        if (payload.id.toString().length === 5) {
          res.send({
            isAuth: true,
            id: payload.id,
            role: 'student',
          });
        } else if (payload.id.toString().length === 6) {
          res.send({
            isAuth: true,
            id: payload.id,
            role: 'admin',
          });
        }
      })
      .catch(() => {
        res.clearCookie('jwt');
        res.send({
          isAuth: false,
        });
      });
  } else {
    res.send({
      isAuth: false,
    });
  }
};
