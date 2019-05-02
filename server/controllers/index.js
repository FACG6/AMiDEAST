const router = require('express').Router();

const student = require('./student');
const courses = require('./courses');
const login = require('./auth/login');
const logout = require('./logout');
const auth = require('../middlewares/authentication');
const authFrontEnd = require('../controllers/auth/auth');

router
  .get('/auth', authFrontEnd);

router
  .get('/logout', logout);

router
  .post('/login', login);

router
  .use(auth);

router
  .use('/student', student);

router
  .use('/course', courses);

module.exports = router;
