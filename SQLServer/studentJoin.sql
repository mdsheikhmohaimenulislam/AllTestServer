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

