create database schoole2;

create table employe (
  id serial primary key,
  name varchar(50) not null,
  age int
)
drop table employe;

-- Renameing table name
alter table employe
rename to employee;

-- Add a Column
alter table employee
add column email varchar(50) unique;

alter table employee
add column dob varchar(20)
-- Deleted a column
alter table employee
drop column dob;

-- Renameing a column name
alter table employee
rename column imployee_id to imployee_age;

-- Modifying constraint
alter table employee
alter column email type varchar(200);

-- Add Constraint
alter table employee
alter column email set not null;

-- Drop Constraint
alter table employee
alter column email drop not null;

-- Set default value
insert into employee (name,imployee_age,email)
value('loi', 20, 'loi@gmail.com');


-- create table
create table employe (
  id serial primary key,
  name varchar(50) not null,
  age int
)

  -- drop database
drop database mydb;

-- insert 
insert into person(id,user_name, email, age, isActive) 
  values(2, 'loi', 'lois@gmail.com', 20, true)

-- Add Constraint unique 
alter table employee
add constraint unique_employee_email unique (email);

-- Drop constraint 
alter table employee
drop constraint pk_employe_pkey;

-- add column varchar
alter table employee
add column email varchar(50)

-- drop column email
alter table employee
drop column email

-- add constraint in primary key
alter table employee
add constraint pk_employe_pkey primary key(id);

-- drop constraint 
alter table employee
drop constraint employe_pkey;

alter table employee
add constraint unique_employee_email unique(email);

-- Set not null in column
alter table employee
alter column email set not null;

-- drop not nul in column
alter table employee
alter column email drop not null;

-- Set not null in column
alter table employee
alter column email set not null;

-- Column email type Add
alter table employee
alter column email type varchar(200)

-- Rename Column imployee_id
alter table employee
rename column imployee_id to imployee_age;

-- Rename Column age
alter table employee
rename column age to imployee_id;

-- Drop column dob
alter table employee
drop column dob;

-- Add Column dob
alter table employee 
add column dob varchar(20)

-- -- deleted table employee
-- drop table employee
