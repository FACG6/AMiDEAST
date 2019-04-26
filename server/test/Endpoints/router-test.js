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

test('Get all available courses for the student', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/course/allcourses')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['title', 'description'], 'get Same data expected');
            t.equal(obj.data[0].title, 'grammer', 'Course title is correct');
            t.end();
          }
        });
    })
    .catch((err) => {
      t.error(err);
    });
});

test.onFinish(() => process.exit(0));
