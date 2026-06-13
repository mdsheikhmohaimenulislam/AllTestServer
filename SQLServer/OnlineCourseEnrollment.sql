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