BEGIN; 

DROP TABLE IF EXISTS student, staff, course, dates, student_course CASCADE;

CREATE TABLE student (
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	id SERIAL PRIMARY KEY,
    is_active BOOLEAN default(true),
    home_phone VARCHAR(15),
	mobile_phone VARCHAR(15) NOT NULL,
	address VARCHAR(50) NOT NULL,
    level INTEGER NOT NULL,
	password VARCHAR NOT NULL
);

CREATE TABLE staff (
	id INT,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
	mobile_phone VARCHAR NOT NULL UNIQUE,
	password VARCHAR NOT NULL
);

CREATE TABLE course (
	id SERIAL  PRIMARY KEY,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
    target_level INTEGER NOT NULL,
    number_of_student INTEGER NOT NULL,
    publish_date	VARCHAR NOT NULL
);

CREATE TABLE dates (
	id SERIAL PRIMARY KEY,
    h_from INTEGER NOT NULL,
    h_to INTEGER NOT NULL,
    course_id INT REFERENCES course(id) ON DELETE CASCADE,
    days VARCHAR NOT NULL
);

CREATE TABLE student_course (
    course_id INT REFERENCES course(id) ON DELETE CASCADE,
    student_id INT REFERENCES student(id) ON DELETE CASCADE,
	dates_id Int REFERENCES dates(id) ON DELETE CASCADE
);

INSERT INTO student 
	(firstname,lastname,id,is_active,home_phone,mobile_phone,address,level,password) 
	values
	('Nareman','Hilles',12345,true,'05999999','445788','rafh',7,'123456'),
	('abdullah','ammar',56789,false,'05994433','44578558','gaza',9,'789456'),
	('abdullah','ammar',11111,false,'05994433','44578558','gaza',3,'789456');

INSERT INTO staff 
	(id, firstname,lastname,email,mobile_phone,password)
	values
	(123456, 'Nare','Hils','n@nn.com','0599999','123456'),
	(234567, 'abd','amr','a@ab.com','054433','123456');

INSERT INTO course 
	(title,description,target_level,number_of_student,publish_date)
	values
	('grammer','this course is',3,30,'30/6/2014'),
	('transleating','about how translate',5,40,'18/7/2005'),
	('reading', 'dfgsfsdfsfds', 6, 20, '18/12/2019');

INSERT INTO dates 
	(h_from,h_to,course_id,days)
	values
	(2,3,1,'sat-sun-tus'),
	(1,2,2,'wen-thers-fri'),
	(5,8,3,'qw,dsf,fdg');

INSERT INTO student_course 
	(course_id,student_id,dates_id)
	values
	(1,12345,1),
	(2,12345,2),
	(3,12345,3),
	(2,56789,2);

COMMIT;
