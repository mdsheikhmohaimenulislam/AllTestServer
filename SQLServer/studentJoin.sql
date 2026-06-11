create database  myNull;

create table NullSection (
  id serial primary key
)

create table students(
  id serial primary key,
  name varchar(100) not null,
  age int not null,
  email varchar(255) unique,
  role int unique not null
  
)

insert into students(name,age,role,email)
values
('Rahim', 20, 101, 'rahim@example.com'),
('Karim', 21, 102, 'karim@example.com'),
('Jamal', 22, 103, NULL),
('Sakib', 19, 104, NULL),
('Nayeem', 23, 105, 'nayeem@example.com'),
('Hasan', 20, 106, 'hasan106@example.com'),
('Rifat', 21, 107, NULL),
('Tanvir', 22, 108, NULL),
('Fahim', 20, 109, 'fahim@example.com'),
('Nabil', 24, 110, 'nabil@example.com'),
('Arif', 19, 111, 'arif@example.com'),
('Rakib', 21, 112, NULL),
('Shuvo', 22, 113, 'shuvo@example.com'),
('Mim', 20, 114, 'mim@example.com'),
('Tania', 23, 115, NULL),
('Nusrat', 21, 116, NULL),
('Sadia', 22, 117, 'sadia@example.com'),
('Ayesha', 20, 118, 'ayesha@example.com'),
('Rima', 19, 119, 'rima@example.com'),
('Jannat', 24, 120, NULL);


select * from students 
where email is null;

select * from students
where email is not null;

-- Coalesce 
select * ,coalesce(email, 'Not Provided') from students

-- limit, offset
select * from students 
limit 5 offset 5*2
-- const page = Number(req.query.page) || 1;
-- const limit = Number(req.query.limit) || 5;

-- const offset = (page - 1) * limit;

-- const result = await pool.query(
--   `
--   SELECT *
--   FROM students
--   ORDER BY id
--   LIMIT $1 OFFSET $2
--   `,
--   [limit, offset]
-- );



-- Update Data
select * from students;

update students
set email = 'loi@gmail.com'
where id in (3)

update students 
set name = 'sara', email = 'sara@gamilcom'
where id = 3


-- Deleting Data
select * from students;

select * from students
where age > 23 and email is null;

delete from students
where age > 23 and email is null;


-- GROUP BY Explained
select county,avg(age) from students
group by county

-- count student by county
select county , count(*) from students
group by county

-- count student by grade
select grade ,count(*) from students
group by grade


-- Courses with more than 4 students
select courses,count(*) from students
group by courses
having count(*) > 4;

--Countries where average student age is greater than 21
select country, avg(age) from students
group by country
having avg(age) > 21

-- ****************************************............................
create table users(
  id serial primary key,
  user_name varchar(50) not null
)

create table posts(
  id serial primary key,
  title text not null,
  user_id int references users(id)
)

INSERT INTO users (user_name) VALUES
('akash'),
('batash'),
('sagor'),
('nodi');

INSERT INTO posts (title, user_id) VALUES
('Enjoying a sunny day with Akash!', 2),
('Batash just shared an amazing recipe!', 1),
('Exploring adventures with Sagor.', 4),
('Nodi''s wisdom always leaves me inspired.', 4);



-- inner
select * from posts as p
inner join users as u on p.user_id = u.id

--   -- Left join
select * from posts as p
left join users as u on  p.user_id = u.id

-- -- Right join 
select * from posts as p
right join users as u on p.user_id = u.id

-- -- full join
select * from posts as p
full join users as u on p.user_id = u.id

-- select * from users as u
-- right join posts as p on u.id = p.user_id


-- Cross Join
CREATE TABLE employees (
emp_id INT,
emp_name VARCHAR(50),
dept_id INT
);

CREATE TABLE departments (
dept_id INT,
dept_name VARCHAR (50)
)

-- Inserting sample data
INSERT INTO employees VALUES (1, 'John Doe', 101);
INSERT INTO employees VALUES (2, 'Jane Smith', 102);

INSERT INTO departments VALUES (101, 'Human Resources');
insert INTO departments VALUES (102, 'Marketing!')

-- Cross Join
select * from employees 
cross join departments

-- natural join
-- select * from employees
-- natural join departments
