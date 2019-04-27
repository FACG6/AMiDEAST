const request = require('supertest');
const test = require('tape');
const app = require('../../app');


test('just for testing', (t) => {
  t.equal(1, 1, 'on is equal one');
  t.end();
});

test('add course courses', (t) => {
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


test.onFinish(() => process.exit(0));
