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



insert into
  courses (
    course_id,
    course_title,
    category,
    price,
    instructor,
    published_year
  )
values
  (
    1,
    'Complete SQL Bootcamp',
    'Database',
    49.99,
    'John Carter',
    2021
  ),
  (
    2,
    'Advanced JavaScript',
    'Programming',
    59.99,
    'Sarah Miller',
    2020
  ),
  (
    3,
    'Python for Data Science',
    'Data Science',
    69.99,
    'David Kim',
    2022
  ),
  (
    4,
    'Web Development with React',
    'Programming',
    54.99,
    'Emily Stone',
    2021
  ),
  (
    5,
    'Machine Learning Basics',
    'AI',
    79.99,
    'Andrew Ng',
    2019
  ),
  (
    6,
    'Cloud Computing Fundamentals',
    'Cloud',
    64.99,
    'James Allen',
    2020
  ),
  (
    7,
    'UI/UX Design Essentials',
    'Design',
    39.99,
    'Laura Scott',
    2022
  ),
  (
    8,
    'DevOps for Beginners',
    'DevOps',
    74.99,
    'Michael Brown',
    2023
  );



insert into
  enrollments (
    enrollment_id,
    student_id,
    course_id,
    enrollment_date,
    progress_percentage,
    paid_amount
  )
values
  (1, 1, 1, '2023-05-01', 80, 49.99),
  (2, 2, 2, '2023-05-03', NULL, 59.99),
  (3, 3, 3, '2023-05-05', 60, 69.99),
  (4, 4, 1, '2023-05-07', 100, 49.99),
  (5, 5, 4, '2023-05-10', 40, 54.99),
  (6, 6, 5, '2023-05-12', NULL, 79.99),
  (7, 7, 2, '2023-06-01', 90, 59.99),
  (8, 8, 6, '2023-06-02', 30, 64.99),
  (9, 9, 3, '2023-06-03', 70, 69.99),
  (10, 10, 7, '2023-06-04', NULL, 39.99),
  (11, 1, 8, '2023-06-05', 20, 74.99),
  (12, 2, 1, '2023-06-06', 50, 49.99),
  (13, 3, 6, '2023-06-07', NULL, 64.99),
  (14, 4, 4, '2023-06-08', 85, 54.99),
  (15, 5, 5, '2023-06-09', 60, 79.99);
