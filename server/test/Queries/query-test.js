const test = require('tape');

const getStudent = require('../../database/queries/getStudent');

test('test query for get student information', (t) => {
  getStudent(12345)
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
          ['amideastid', 'firstname', 'lastname', 'mobilephone', 'level', 'isactive'], 'Same Data',
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
