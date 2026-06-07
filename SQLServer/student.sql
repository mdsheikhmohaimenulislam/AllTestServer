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

-- Distinct unique values
select distinct country from students;
select distinct course from students;

-- Filtering
-- ( = ) Operator
-- Select students from the Japan
select * from students
where country = 'Japan';

-- select student with 'A' grade in Computer Science
select * from students
where grade = 'A' and course = 'Computer Science'

-- Select students with a specific blood group 'A+'
select * from students
where blood_group = 'A+'

-- OR Operator
-- Select students from the USA or from Japan
select * from students
where country = 'USA' or  country = 'Japan';

-- Select students with a grade of 'A' or 'B' in Chemistry or Physics
select * from students
where (grade = 'A' or grade = 'B') and (course = 'Physics' or course = 'Chemistry');

-- Select students with a grade of 'A' or 'B' in Chemistry or Physics Short verstion
select * from students
where grade in ('A','B') and course in ('Physics','Chemistry')


-- Select students from the India or from Canada and the age is 19
select * from students
where country in ('India', 'Canada') and age = 19

-- Comparison operators
-- select students older than 20
select * from students
where age >= 20;

select * from students
where country != 'India';

select * from students
where country <> 'India';

select * from students
where country not in ('India' ,'UAE');

-- Select students whose age is between 20 and 22.
select * from students
where age between 20 and 21;

select distinct age from students

-- Select students from Bangladesh, Japan, or UAE.
select * from students
where country = 'Bangladesh' or country = 'Japan' or country = 'UAE';

-- Short vertion
select  * from students
where country in ('Bangladesh','Japan','UAE');


--Select students whose first name starts with 'A'.
select * from students
where first_name like 'M%'
  
select * from students
where first_name like 'M_____%'

-- Select students whose last name ends with 'n'.
select * from students
where last_name like '%m';

select * from students
where last_name like '%a_'


-- ILike Case sentive
select * from students
where last_name Ilike '%A_'
