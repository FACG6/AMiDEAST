const test = require('tape');
const request = require('supertest');
const app = require('../../app');
const dbBuild = require('../../database/config/db_build');
// const connection = require('../../database/config/db_connection');

// const selectFirstUser = () => connection.query('select id from student LIMIT 1');

test('Get student information from /api/v1/student/user/12345', (t) => {
  // selectFirstUser()
  //   .then(res => console.log(res.rows[0].id))
  //   .catch(err =>console.log(22222, err))
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/user/12345')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.error(obj.error);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'get same data that expected');
            t.equal(obj.data[0].id, 12345, 'User ID for the correct');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test.onFinish(() => process.exit(0));
