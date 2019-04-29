const test = require('tape');
const request = require('supertest');
const app = require('../../app');
const dbBuild = require('../../database/config/db_build');

test('Get all student information from /api/v1/student/', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'get same data that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get student information from /api/v1/student/12345', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/12345')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data), ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'get same data that expected');
            t.equal(obj.data.id, 12345, 'User ID for the correct');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get student dose not exist from /api/v1/student/123456', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/123456')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = res.body;
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

test('Delete student from /api/v1/student/12345', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .delete('/api/v1/student/12345')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.data, 'Deleted successfully', 'User with the id deleted');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Delete student not exist from /api/v1/student/12365645', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .delete('/api/v1/student/123561645')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.error, 'student not found', 'User with the id not found');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Add new student from /api/v1/student/', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .post('/api/v1/student/')
        .send({
          password: 'new student',
          mobile_phone: '562649',
          lastname: 'hasn',
          home_phone: '49628462',
          level: 7,
          address: 'gaza',
          firstname: 'ali',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const student = (res.body.data[0]);
          if (err) {
            t.error(err);
          } else {
            t.equal(student.password, 'new student', 'Same password');
            t.equal(student.mobile_phone, '562649', 'Same mobile_phone');
            t.equal(student.lastname, 'hasn', 'Same lastname');
            t.equal(student.home_phone, '49628462', 'Same home_phone');
            t.equal(student.level, 7, 'Same level');
            t.equal(student.address, 'gaza', 'Same address');
            t.equal(student.firstname, 'ali', 'Same firstname');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Update student from /api/v1/student/1', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .put('/api/v1/student/12345')
        .send({
          firstname: 'ali',
          lastname: 'hasn',
          home_phone: '49628462',
          mobile_phone: '562649',
          address: 'gaza',
          level: 7,
          password: 'new student',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.data, 'Updated successfully', 'Updated successfully');

            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get students information by level from /api/v1/student/level/7', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/level/7')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
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

test('Get student information by level dose not exist from /api/v1/student/level/123456', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/level/123456')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = res.body;
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'No students for this level', 'get same error that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get students by course from /api/v1/student/course/1', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/course/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'address', 'home_phone'], 'get same data that expected');
            t.equal(obj.data[0].id, 12345, 'User ID for the correct');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get students by course dose not exist from /api/v1/student/course/123456', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/student/course/123456')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = res.body;
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'No students for this course', 'get same error that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});


test('Get all courses information from /api/v1/course/', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/course/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['id', 'title', 'description', 'target_level', 'number_of_student', 'publish_date'], 'get same data that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get course information from /api/v1/course/1', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/course/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['id', 'title', 'description', 'target_level', 'number_of_student', 'publish_date'], 'get same data that expected');
            t.equal(obj.data[0].id, 1, 'Course ID for the correct');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get course dose not exist from /api/v1/course/123456', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/course/123456')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = res.body;
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'Course not found', 'get same error that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Delete course from /api/v1/course/1', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .delete('/api/v1/course/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.data, 'Deleted Succesfully', 'User with the id deleted');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Delete course not exist from /api/v1/course/12365645', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .delete('/api/v1/course/123561645')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.error, 'The course dose not exist', 'User with the id not found');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Add new course from /api/v1/course/', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .post('/api/v1/course/')
        .send({
          title: 'new course',
          numberOfStudent: 30,
          description: 'desc from new course',
          level: 8,
          days: 'sat-mon-wed',
          start: 17,
          end: 9,
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const course = (res.body.data);
          if (err) {
            t.error(err);
          } else {
            t.equal(course.title, 'new course', 'Same title');
            t.equal(course.description, 'desc from new course', 'Same description');
            t.equal(course.level, 8, 'Same target_level');
            t.equal(course.numberOfStudent, 30, 'Same number_of_student');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get courses information by level from /api/v1/course/level/3', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/course/level/3')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['title', 'description'], 'get same data that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get courses information by level dose not exist from /api/v1/course/level/123456', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/course/level/123456')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = res.body;
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'No courses available for this level', 'get same error that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get courses by student from /api/v1/course/student/12345', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/course/student/12345')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.deepEqual(Object.keys(obj.data[0]), ['title', 'description', 'publish_date', 'days', 'h_from', 'h_to'], 'get same data that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Get students by course dose not exist from /api/v1/course/student/15152345', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .get('/api/v1/course/student/123554145')
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = res.body;
          if (err) {
            t.error(err);
          } else if (obj.error) {
            t.equal(obj.error, 'No courses for this student', 'get same error that expected');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Add new course for student from /api/v1/course/1', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .post('/api/v1/course/1')
        .send({
          datesId: 2,
          studentid: 12345,
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.data, 'Course added succesfuly', 'Course added succesfuly');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test('Add new course for student not exist from /api/v1/course/123545145', (t) => {
  dbBuild()
    .then(() => {
      request(app)
        .post('/api/v1/course/125451345')
        .send({
          id: 125451345,
          datesId: 2,
          courseId: 1,
        })
        .expect(500)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          const obj = (res.body);
          if (err) {
            t.error(err);
          } else {
            t.equal(obj.error, 'Course add failed', 'Course add failed');
            t.end();
          }
        });
    })
    .catch(err => t.error(err));
});

test.onFinish(() => process.exit(0));
