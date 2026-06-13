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


-- DATASET TO INSERT
insert into
  students (
    student_id,
    first_name,
    last_name,
    email,
    phone,
    country,
    enrollment_date
  )
values
  (
    1,
    'Rahim',
    'Uddin',
    'rahim@email.com',
    '01711111111',
    'Bangladesh',
    '2023-01-10'
  ),
  (
    2,
    'Karim',
    'Ahmed',
    'karim@email.com',
    NULL,
    'Bangladesh',
    '2023-01-15'
  ),
  (
    3,
    'Sara',
    'Khan',
    'sara@email.com',
    '01822222222',
    'Pakistan',
    '2023-02-01'
  ),
  (
    4,
    'John',
    'Smith',
    'john@email.com',
    NULL,
    'USA',
    '2023-02-10'
  ),
  (
    5,
    'Emma',
    'Brown',
    'emma@email.com',
    '01933333333',
    'UK',
    '2023-02-20'
  ),
  (
    6,
    'Ayaan',
    'Ali',
    'ayaan@email.com',
    NULL,
    'India',
    '2023-03-05'
  ),
  (
    7,
    'Lina',
    'Rahman',
    'lina@email.com',
    '01644444444',
    'Bangladesh',
    '2023-03-12'
  ),
  (
    8,
    'Mark',
    'Taylor',
    'mark@email.com',
    NULL,
    'Australia',
    '2023-03-25'
  ),
  (
    9,
    'Sophia',
    'Lee',
    'sophia@email.com',
    '01555555555',
    'USA',
    '2023-04-01'
  ),
  (
    10,
    'Daniel',
    'Martinez',
    'daniel@email.com',
    NULL,
    'Spain',
    '2023-04-10'
  );
