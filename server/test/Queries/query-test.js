const test = require('tape');

const getStudent = require('../../database/queries/getStudent');
const dbBuild = require('../../database/config/db_build');

test('test query for get student information', (t) => {
  dbBuild().then(() => getStudent(12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        t.equal(res.rowCount !== 0, true, 'There is student in the database');
        return res.rows;
      }
      t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
      t.end();
      return false;
    })
    .then((res) => {
      if (res) {
        const student = res[0];
        t.deepEqual(
          Object.keys(student),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'Same Data',
        );
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
