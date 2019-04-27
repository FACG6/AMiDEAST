const test = require('tape');
const request = require('supertest');
const app = require('../../app');
const dbBuild = require('../../database/config/db_build');

test('Get student information from /api/v1/student/user/12345', (t) => {
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
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'get same data that expected');
            t.equal(obj.data[0].id, 12345, 'User ID for the correct');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get user dose not exist from  /api/v1/student/user/123456', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/user/123456')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'The student dose not exist', 'get same error that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test.onFinish(() => process.exit(0));
