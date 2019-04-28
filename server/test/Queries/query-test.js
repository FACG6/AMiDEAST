const test = require('tape');

const dbBuild = require('../../database/config/db_build');

const getStudent = require('../../database/queries/getStudent');
const { getStudentsInformation } = require('../../database/queries/getStudents');
const getCourse = require('../../database/queries/getCourse');
const getCourses = require('../../database/queries/getCourses');
const { deleteStudent, updateStudentStatus } = require('../../database/queries/deleteStudent');
const { deleteCourse } = require('../../database/queries/deleteCourse');
const { insertCourse } = require('../../database/queries/addCourse');
const { insertStudent } = require('../../database/queries/addStudent');
const { putStudent } = require('../../database/queries/updateStudent');
const { postApplyCourse } = require('../../database/queries/postApplyCourse');
const getStudentsByLevel = require('../../database/queries/getStudentsLevel');
const getCoursesByLevel = require('../../database/queries/getCoursesLevel');
const { getStudentsByCourse } = require('../../database/queries/getStudentsCourse');
const getStudentCourses = require('../../database/queries/getCoursesStudent');

test('Test query for get one student information', (t) => {
  dbBuild()
    .then(() => getStudent(12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.deepEqual(
          Object.keys(student),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for get one student information dose not exist', (t) => {
  dbBuild()
    .then(() => getStudent(85626))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.deepEqual(
          Object.keys(student),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for get all student information', (t) => {
  dbBuild()
    .then(() => getStudentsInformation())
    .then((res) => {
      if (res.rowCount !== 0) {
        const students = res.rows[0];
        t.deepEqual(
          Object.keys(students),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'No students in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for get one course information', (t) => {
  dbBuild()
    .then(() => getCourse(1))
    .then((res) => {
      if (res.rowCount !== 0) {
        const course = res.rows[0];
        t.deepEqual(
          Object.keys(course),
          ['id', 'title', 'description', 'target_level', 'number_of_student', 'publish_date'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The course is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for get one course dose not exist', (t) => {
  dbBuild()
    .then(() => getCourse(89462))
    .then((res) => {
      if (res.rowCount !== 0) {
        const course = res.rows[0];
        t.deepEqual(
          Object.keys(course),
          ['id', 'title', 'description', 'target_level', 'number_of_student', 'publish_date'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The course is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for get all courses', (t) => {
  dbBuild()
    .then(() => getCourses())
    .then((res) => {
      if (res.rowCount !== 0) {
        const course = res.rows[0];
        t.deepEqual(
          Object.keys(course),
          ['id', 'title', 'description', 'target_level', 'number_of_student', 'publish_date'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'No courses in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for delete student', (t) => {
  dbBuild()
    .then(() => deleteStudent(12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.deepEqual(
          Object.keys(student),
          ['course_id', 'student_id', 'dates_id'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for delete student dose not exist', (t) => {
  dbBuild()
    .then(() => deleteStudent(18416))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.deepEqual(
          Object.keys(student),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'is_active'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for update student (is_active)', (t) => {
  dbBuild()
    .then(() => updateStudentStatus(12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        const status = res.rows[0].is_active;
        t.equal(status, false, 'The student updated');
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for update student (is_active)', (t) => {
  dbBuild()
    .then(() => updateStudentStatus(979))
    .then((res) => {
      if (res.rowCount !== 0) {
        const status = res.rows[0].is_active;
        t.equal(status, false, 'The student updated');
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for delete course', (t) => {
  dbBuild()
    .then(() => deleteCourse(1))
    .then((res) => {
      if (res.rowCount !== 0) {
        const course = res.rows[0];
        t.deepEqual(
          Object.keys(course),
          ['id', 'title', 'description', 'target_level', 'number_of_student', 'publish_date'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The course is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for delete course dose not exist', (t) => {
  dbBuild()
    .then(() => deleteCourse(5461))
    .then((res) => {
      if (res.rowCount !== 0) {
        const course = res.rows[0];
        t.deepEqual(
          Object.keys(course),
          ['id', 'title', 'description', 'target_level', 'number_of_student', 'publish_date'], 'Same Data',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The course is not exist in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for add course', (t) => {
  dbBuild()
    .then(() => insertCourse({
      title: 'new course',
      description: 'desc from new course',
      target_level: 8,
      number_of_student: 30,
      publish_date: '18/12/2020',
    }))
    .then((res) => {
      if (res.rowCount !== 0) {
        const course = res.rows[0];
        t.equal(course.title, 'new course', 'Same title');
        t.equal(course.description, 'desc from new course', 'Same description');
        t.equal(course.target_level, 8, 'Same target_level');
        t.equal(course.number_of_student, 30, 'Same number_of_student');
        t.equal(course.publish_date, '18/12/2020', 'Same publish_date');
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The course not add in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for add student', (t) => {
  dbBuild()
    .then(() => insertStudent({
      password: 'new student',
      mobile_phone: '562649',
      lastname: 'hasn',
      home_phone: '49628462',
      level: 7,
      address: 'gaza',
      firstname: 'ali',
    }))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.equal(student.password, 'new student', 'Same password');
        t.equal(student.mobile_phone, '562649', 'Same mobile_phone');
        t.equal(student.lastname, 'hasn', 'Same lastname');
        t.equal(student.home_phone, '49628462', 'Same home_phone');
        t.equal(student.level, 7, 'Same level');
        t.equal(student.address, 'gaza', 'Same address');
        t.equal(student.firstname, 'ali', 'Same firstname');
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student not add in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for update student', (t) => {
  dbBuild()
    .then(() => putStudent({
      firstname: 'ali',
      lastname: 'hasn',
      home_phone: '49628462',
      mobile_phone: '562649',
      address: 'gaza',
      level: 7,
      password: 'new student',
    }, 12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.equal(student.firstname, 'ali', 'Same firstname');
        t.equal(student.lastname, 'hasn', 'Same lastname');
        t.equal(student.home_phone, '49628462', 'Same home_phone');
        t.equal(student.mobile_phone, '562649', 'Same mobile_phone');
        t.equal(student.address, 'gaza', 'Same address');
        t.equal(student.level, 7, 'Same level');
        t.equal(student.password, 'new student', 'Same password');
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The student not updated in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for apply for course from student', (t) => {
  dbBuild()
    .then(() => postApplyCourse(1, 12345, 2))
    .then((res) => {
      if (res.rowCount !== 0) {
        const data = res.rows[0];
        t.equal(data.course_id, 1, 'Same course id');
        t.equal(data.student_id, 12345, 'Same student id');
        t.equal(data.dates_id, 2, 'Same dates id');
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'The course not add to the student in the database');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getStudents by *** Level *** information "GET" ', (t) => {
  dbBuild()
    .then(() => getStudentsByLevel(7))
    .then((res) => {
      if (res.rowCount !== 0) {
        const resultcount = res.rowCount;
        t.deepEqual(
          resultcount,
          resultcount, 'Return all students in the level',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no student in this level');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getStudents by *** Level *** when no students', (t) => {
  dbBuild()
    .then(() => getStudentsByLevel(564))
    .then((res) => {
      if (res.rowCount !== 0) {
        const resultcount = res.rowCount;
        t.deepEqual(
          resultcount,
          resultcount, 'Return all students in the level',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no student in this level');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getCourses by *** Level *** information "GET" ', (t) => {
  dbBuild()
    .then(() => getCoursesByLevel(3))
    .then((res) => {
      if (res.rowCount !== 0) {
        const resultcount = res.rowCount;
        t.deepEqual(
          resultcount,
          resultcount, 'Return all courses in the level',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no courses in this level');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getCourses by *** Level *** information "GET" ', (t) => {
  dbBuild()
    .then(() => getCoursesByLevel(30))
    .then((res) => {
      if (res.rowCount !== 0) {
        const resultcount = res.rowCount;
        t.deepEqual(
          resultcount,
          resultcount, 'Return all courses in the level',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no courses in this level');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getStudents by *** courseId *** Course information "GET"', (t) => {
  dbBuild()
    .then(() => getStudentsByCourse(1))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.deepEqual(
          Object.keys(student),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'address', 'home_phone'], 'Same Data for student in the course',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no student in this course');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getStudents by *** courseId *** Course information "GET"', (t) => {
  dbBuild()
    .then(() => getStudentsByCourse(5151))
    .then((res) => {
      if (res.rowCount !== 0) {
        const student = res.rows[0];
        t.deepEqual(
          Object.keys(student),
          ['id', 'firstname', 'lastname', 'mobile_phone', 'level', 'address', 'home_phone'], 'Same Data for student in the course',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no student in this course');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getCourses by *** StudentId *** information "GET" ', (t) => {
  dbBuild()
    .then(() => getStudentCourses(12345))
    .then((res) => {
      if (res.rowCount !== 0) {
        const resultcount = res.rowCount;
        t.deepEqual(
          resultcount,
          resultcount, 'Return all courses for this student',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no courses for this student');
        t.end();
      }
    })
    .catch((error) => {
      t.error(error);
    });
});

test('Test query for getCourses by *** StudentId *** information "GET" ', (t) => {
  dbBuild()
    .then(() => getStudentCourses(12545))
    .then((res) => {
      if (res.rowCount !== 0) {
        const resultcount = res.rowCount;
        t.deepEqual(
          resultcount,
          resultcount, 'Return all courses for this student',
        );
        t.end();
      } else {
        t.equal(res.rowCount === 0, true, 'There is no courses for this student');
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
