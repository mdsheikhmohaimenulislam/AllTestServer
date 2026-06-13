create database OnlineCourseEnrollment
create table students (
  student_id int primary key,
  first_name varchar(50),
  last_name varchar(50),
  email varchar(100) unique,
  phone varchar(20),
  country varchar(50),
  enrollment_date date
)

create table courses (
  course_id int primary key,
  course_title varchar(150),
  category varchar(50),
  price decimal(10, 2),
  instructor varchar(100),
  published_year int
)
create table enrollments (
  enrollment_id int primary key,
  student_id int references students (student_id),
  course_id int references courses (course_id),
  enrollment_date date,
  progress_percentage int,
  paid_amount decimal(10, 2)
)