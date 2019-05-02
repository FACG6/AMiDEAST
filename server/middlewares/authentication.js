const checkCookie = require('../helpers/checkCookie');

module.exports = (req, res, next) => {
  if (req.cookies.jwt) {
    checkCookie(req.cookies.jwt)
      .then((payload) => {
        req.payload = payload;
        next();
      })
      .catch(() => {
        res.clearCookie('jwt');
        res.status(401).send({
          msg: 'you are not authenticated',
          code: 401,
        });
      });
  } else {
    res.status(401).send({
      msg: 'you are not authenticated',
      code: 401,
    });
  }
};
