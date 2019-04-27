
const test = require('tape');
const dbBuild = require('../../database/config/db_build');

const { addCourses } = require('../../database/queries/addData');


test('test of addcourse query', (t) => {
  dbBuild()
    .then(() => addCourses('gram', 'this course', 2, 25, '14/6/2014'))
    .then((res) => {
      console.log(res);


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
