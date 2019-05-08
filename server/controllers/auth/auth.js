const checkCookie = require('../../helpers/checkCookie');

module.exports = (req, res) => {
  if (req.cookies && req.cookies.jwt) {
    checkCookie(req.cookies.jwt)
      .then((payload) => {
        res.send({
          isAuth: true,
          id: payload.id,
        });
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
