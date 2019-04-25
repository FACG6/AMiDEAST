const tape = require('tape');

const { addStudent } = require('../../database/queries/addData');

const build = require('../../database/config/db_build');


tape('just for testing', (t) => {
  t.equal(1, 1, 'on is equal one');
  t.end();
});


tape('test of addstudent query', (test) => {
  build()
    .then(() => addStudent('fatma', 'siam', 'Rafah', '123456', 'true', '08 2152156', '+972 591223456', '5', '123'))
    .then((res) => {
      test.equal(res.rowCount, 1, 'student added');
      test.deepEqual(res.rows, [{
        id: 3,
        firstname: 'fatma',
        lastname: 'siam',
        address: 'Rafah',
        amideastid: '123456',
        isactive: true,
        homephone: '08 2152156',
        mobilephone: '+972 591223456',
        level: 5,
        password: '123',
      }], 'student add');

      test.end();
    })
    .catch((error) => {
      test.error(error);
      test.end();
    });
});

tape.onFinish(() => {
  process.exit(0);
});
