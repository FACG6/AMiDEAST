const router = require('express').Router();

const student = require('./student');
const courses = require('./courses');
const login = require('./auth/login');
const logout = require('./logout');
const auth = require('../middlewares/authentication');
const authFrontEnd = require('../controllers/auth/auth');
const { permission, authorization } = require('../middlewares/authorization');

router
  .get('/auth', authFrontEnd);

router
  .get('/logout', logout);

router.use(permission);
router
  .post('/login', login);


router
  .use(auth);

router.use(authorization);
router
  .use('/student', student);

router
  .use('/course', courses);

module.exports = router;
