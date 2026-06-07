-- Create table
create table students (
  student_id serial primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  age int,
  grade char(2),
  course varchar(50),
  email varchar(100) unique,
  dob date,
  blood_group varchar(5),
  country varchar(50)
)

-- Insert data
INSERT INTO students (
    first_name,
    last_name,
    age,
    grade,
    course,
    email,
    dob,
    blood_group,
    country
)
VALUES
    ('Anika', 'Rahman', 20, 'A', 'Computer Science', 'anika.rahman@email.com', '2006-05-14', 'O+', 'Bangladesh'),
    ('John', 'Doe', 21, 'B', 'Mathematics', 'john.doe@email.com', '2005-08-22', 'A+', 'USA'),
    ('Ariv', 'Sharma', 19, 'A+', 'Physics', 'ariv.sharma@email.com', '2007-01-10', 'B+', 'India'),
    ('Fatima', 'Ali', 22, 'B+', 'Chemistry', 'fatima.ali@email.com', '2004-11-30', 'AB+', 'UAE'),
    ('Liam', 'Smith', 20, 'A-', 'Mechanical Engineering', 'liam.smith@email.com', '2006-03-05', 'O-', 'UK'),
    ('Sajid', 'Hasan', 21, 'A', 'Computer Science', 'sajid.hasan@email.com', '2005-12-18', 'A-', 'Bangladesh'),
    ('Emma', 'Jones', 19, 'B', 'Biology', 'emma.jones@email.com', '2007-07-25', 'B-', 'Canada'),
    ('Yuki', 'Tanaka', 20, 'A+', 'Data Science', 'yuki.tanaka@email.com', '2006-09-02', 'O+', 'Japan'),
    ('Carlos', 'Gomez', 22, 'B-', 'Civil Engineering', 'carlos.gomez@email.com', '2004-04-14', 'A+', 'Spain'),
    ('Chloe', 'Brown', 21, 'A', 'Economics', 'chloe.brown@email.com', '2005-10-11', 'AB-', 'Australia'),
    ('Tanvir', 'Ahmed', 20, 'B+', 'Electrical Engineering', 'tanvir.ahmed@email.com', '2006-02-28', 'O+', 'Bangladesh'),
    ('Sophia', 'Müller', 19, 'A', 'History', 'sophia.muller@email.com', '2007-06-15', 'A+', 'Germany'),
    ('Rahul', 'Verma', 21, 'B', 'Business Administration', 'rahul.verma@email.com', '2005-04-20', 'B+', 'India'),
    ('Min-jun', 'Kim', 20, 'A+', 'Software Engineering', 'minjun.kim@email.com', '2006-11-08', 'O+', 'South Korea'),
    ('Olivia', 'Wilson', 22, 'B+', 'Psychology', 'olivia.wilson@email.com', '2004-01-25', 'A-', 'UK'),
    ('Nadia', 'Islam', 19, 'A-', 'English Literature', 'nadia.islam@email.com', '2007-09-12', 'B+', 'Bangladesh'),
    ('Lucas', 'Silva', 21, 'B', 'Environmental Science', 'lucas.silva@email.com', '2005-05-19', 'O-', 'Brazil'),
    ('Zahra', 'Mansoor', 20, 'A', 'Finance', 'zahra.sansoor@email.com', '2006-08-31', 'AB+', 'Saudi Arabia'),
    ('Ethan', 'Davis', 22, 'A+', 'Cyber Security', 'ethan.davis@email.com', '2004-07-07', 'B-', 'USA'),
    ('Amara', 'Okonkwo', 21, 'B+', 'Political Science', 'amara.okonkwo@email.com', '2005-03-14', 'O+', 'Nigeria');


-- Using Select all data
select * from students;

-- Column name rename Alias
select first_name as "Frist Name", age as "Student Age" from students;

-- Sorting big to small
select first_name,blood_group,country,age from students
order by age desc;

-- Sorting small to big
select first_name, blood_group, country, age from students
order by age asc