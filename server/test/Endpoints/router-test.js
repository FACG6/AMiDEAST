const request = require('supertest');
const test = require('tape');
const app = require('../../app');
const dbBuild = require('../../database/config/db_build');

test('just for testing', (t) => {
  t.equal(1, 1, 'on is equal one');
  t.end();
});

test('add course courses', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .post('/api/v1/staff/course/addcourse')
        .send({
          courseName: 'grammer',
          description: 'this courrse',
          level: 8,
          numberofstudent: 29,
          publishDates: '14/4/2014',
        })
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((errr, res) => {
          if (errr) {
            t.error(errr);
          } else {
            t.equal(res.body.data[0].title, 'grammer', 'the title must be grammer');
            t.end();
          }
        });
    });
});

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

test('Get all available courses for the student', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/course/allcourses')
        .send({ level: 2 })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['title', 'description'], 'get same data');
            t.end();
          }
        });
    })
    .catch((err) => {
      t.error(err);
    });
});

test('Get when no available courses for the student', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/course/allcourses')
        .send({ level: 20 })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'No courses available for this level', 'get Same error expected');
            t.end();
          }
        });
    })
    .catch((err) => {
      t.error(err);
    });
});

test('Get all applied courses for the student from /api/v1/student/course/mycourse', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/course/mycourses')
        .send({ id: 12345 })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['title', 'description', 'publish_date', 'days', 'h_from', 'h_to'], 'get Same data expected');
            t.equal(obj.data[0].title, 'grammer', 'Course title is correct');
            t.end();
          }
        });
    })
    .catch((err) => {
      t.error(err);
    });
});

test('Get all applied courses for the student dose not exist from /api/v1/student/course/mycourse', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/course/mycourses')
        .send({ id: 125 })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'No courses are applied for this student', 'Course title is correct');
            t.end();
          }
        });
    })
    .catch((err) => {
      t.error(err);
    });
});

test('Post new course for the student at /api/v1/student/course/applycourse', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .post('/api/v1/student/course/applycourse')
        .send({
          courseId: 1,
          id: 12345,
          datesId: 2,
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.data, 'Course add succesfuly', 'The course added in the database');
            t.end();
          }
        });
    })
    .catch((err) => {
      t.error(err);
    });
});

test('Post new course for the student with fallen data at /api/v1/student/course/applycourse', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .post('/api/v1/student/course/applycourse')
        .send({
          courseId: 1,
          id: 45,
          datesId: 2,
        })
        .expect(500)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = JSON.parse(res.text);
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'Course add failed', 'get the same error expected');
            t.end();
          }
        });
    })
    .catch((err) => {
      t.error(err);
    });
});

test.onFinish(() => process.exit(0));
