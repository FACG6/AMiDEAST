const { checkCookie } = require('../helpers/checkCookie');

const authentication = (req, res, next) => {
  if (!req.cookies) {
    res.redirect('/login');
  } else if (!req.cookies.jwt) {
    res.redirect('/login');
  } else {
    checkCookie(req.cookies.jwt)
      .then((payload) => {
        req.userId = payload.userId;
        req.userName = payload.userName;
        next();
      })
      .catch(() => {
        res.clearCookie('jwt');
        res.redirect('/login');
      });
  }
};

authentication();
