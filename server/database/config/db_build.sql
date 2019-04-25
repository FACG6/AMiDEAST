BEGIN; 

DROP TABLE IF EXISTS student, staff, course, dates, studentcourse CASCADE;

CREATE TABLE student (
	id SERIAL PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	amideastId INTEGER NOT NULL,
    isActive BOOLEAN default(false),
    homePhone VARCHAR(15),
	mobilePhone VARCHAR(15) NOT NULL,
	address VARCHAR(50) NOT NULL,
    level INTEGER NOT NULL,
	password VARCHAR NOT NULL
);

CREATE TABLE staff (
	id SERIAL PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
	mobilePhone VARCHAR NOT NULL UNIQUE,
	password VARCHAR NOT NULL
);

CREATE TABLE course (
	id SERIAL  PRIMARY KEY,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
    targetLevel INTEGER NOT NULL,
    numberOfStudent INTEGER NOT NULL,
    publishDate	VARCHAR NOT NULL
);

CREATE TABLE dates (
	id SERIAL PRIMARY KEY,
    h_from DATE NOT NULL,
    h_to DATE NOT NULL,
    courseid INT REFERENCES course(id),
    days VARCHAR NOT NULL
);

CREATE TABLE studentcourse (
    courseid INT REFERENCES course(id),
    studentid INT REFERENCES student(id),
	datesid Int REFERENCES dates(id)
);

INSERT INTO student 
	(firstname,lastname,amideastId,isActive,homePhone,mobilePhone,address,level,password) 
	values
	('Nareman','Hilles',12345,true,'05999999','445788','rafh',7,'123456'),
	('abdullah','ammar',56789,false,'05994433','44578558','gaza',9,'789456');

INSERT INTO staff 
	(firstname,lastname,email,mobilePhone,password)
	values
	('Nare','Hils','n@nn.com','0599999','741852'),
	('abd','amr','a@ab.com','054433','456287');

INSERT INTO course 
	(title,description,targetLevel,numberOfStudent,publishDate)
	values
	('grammer','this course is',3,30,'30/6/2014'),
	('transleating','about how translate',5,40,'18/7/2005'),
	('reading', 'dfgsfsdfsfds', 6, 20, '18/12/2019');

INSERT INTO dates 
	(fromm,too,courseid,days)
	values
	(2,3,1,'sat-sun-tus'),
	(1,2,2,'wen-thers-fri'),
	(5,8,3,'qw,dsf,fdg');

INSERT INTO studentcourse 
	(courseid,studentid,datesid)
	values
	(1,1,1),
	(2,1,2),
	(3,1,3),
	(2,2,2);

COMMIT;
