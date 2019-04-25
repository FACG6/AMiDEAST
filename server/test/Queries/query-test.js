const test = require('tape');
const getStudent = require('../../database/queries/getStudent');
const dbBuild = require('../../database/config/db_build');

const { addStudent } = require('../../database/queries/addData');

test('just for testing', (t) => {
  t.equal(1, 1, 'on is equal one');
  t.end();
});

test('test query for get student information', (t) => {
  dbBuild().then(() => getStudent(12345))
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


test('test of addstudent query', (t) => {
  dbBuild()
    .then(() => addStudent('fatma', 'siam', '123456', 'true', '082152156', '9725223', 'Rafah', '5', '123'))
    .then((res) => {
      t.equal(res.rowCount, 1, 'student added');
      t.deepEqual(res.rows, [{
        firstname: 'fatma', lastname: 'siam', id: 123456, is_active: true, home_phone: '082152156', mobile_phone: '9725223', address: 'Rafah', level: 5, password: '123',
      }]);
      t.end();
    })
    .catch((error) => {
      t.error(error);
      t.end();
    });
});

test.onFinish(() => {
  process.exit(0);
});
