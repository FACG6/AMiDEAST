
const test = require('tape');
const dbBuild = require('../../database/config/db_build');

const getStudent = require('../../database/queries/getStudent');

const { addCourses } = require('../../database/queries/addData');
const getAvailableCourses = require('../../database/queries/getAllCourses');
const getStudentCourses = require('../../database/queries/getMyCourses');

test('test of addcourse query', (t) => {
  dbBuild()
    .then(() => addCourses('gram', 'this course', 2, 25, '14/6/2014'))
    .then((res) => {
      t.equal(res.rowCount, 1, 'course added');
      t.deepEqual(res.rows, [{
        id: 4,
        title: 'gram',
        description: 'this course',
        target_level: 2,
        number_of_student: 25,
        publish_date: '14/6/2014',
      }], 'course added');


      t.end();
    })
    .catch((error) => {
      t.error(error);
      t.end();
    });
});

test('Test query for get student information', (t) => {
  dbBuild()
    .then(() => getStudent(12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.deepEqual(
          Object.keys(student),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for get all available courses information', (t) => {
  dbBuild()
    .then(() => getAvailableCourses(2))
    .then((res) => {
      if (res.rowCount !== 0) {
        const courses = res.rows[0];
        t.deepEqual(
          Object.keys(courses),
          ['title', 'description'], 'Same Data for the course',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'No courses in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for get student applied courses', (t) => {
  dbBuild()
    .then(() => getStudentCourses(12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        const courses = res.rows[0];
        t.deepEqual(
          Object.keys(courses),
          ['title', 'description', 'publish_date', 'days', 'h_from', 'h_to'], 'Same Data for the course',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'No courses in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test.onFinish(() => {
  process.exit(0);
});
