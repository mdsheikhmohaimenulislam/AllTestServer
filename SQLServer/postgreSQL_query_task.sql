/**

Online Bookstore Database
TABLE CREATION INSTRUCTIONS
Instruction
Create the following three tables for an online bookstore database.
Pay attention to data types, constraints, and relationships between tables.

TABLE 1: customers
This table should store customer information with the following columns:

customer_id: Integer, primary key
first_name: Text field (max 50 characters)
last_name: Text field (max 50 characters)
email: Text field (max 100 characters)
city: Text field (max 50 characters)
country: Text field (max 50 characters)
registration_date: Date field
TABLE 2: books
This table should store book catalog information with the following columns:

book_id: Integer, primary key
title: Text field (max 200 characters)
author: Text field (max 100 characters)
genre: Text field (max 50 characters)
price: Decimal number (10 digits total, 2 after decimal point)
publication_year: Integer
stock_quantity: Integer
TABLE 3: orders
This table should store order information with the following columns:

order_id: Integer, primary key
customer_id: Integer that references the customers table
book_id: Integer that references the books table
order_date: Date field
quantity: Integer
total_amount: Decimal number (10 digits total, 2 after decimal point)
DATASET TO INSERT
Instruction
After creating your tables, insert the following data.
You'll need to write INSERT statements for each table.

CUSTOMERS DATA (10 records)
Columns: customer_id, first_name, last_name, email, city, country, registration_date

1, John, Smith, john.smith@email.com, New York, USA, 2023-01-15
2, Emma, Johnson, emma.j@email.com, London, UK, 2023-02-20
3, Michael, Brown, mbrown@email.com, Toronto, Canada, 2023-01-10
4, Sophia, Davis, sophia.d@email.com, Sydney, Australia, 2023-03-05
5, James, Wilson, jwilson@email.com, New York, USA, 2023-02-28
6, Oliver, Taylor, oliver.t@email.com, London, UK, 2023-04-12
7, Ava, Anderson, ava.anderson@email.com, Los Angeles, USA, 2023-03-18
8, William, Martinez, w.martinez@email.com, Madrid, Spain, 2023-01-25
9, Isabella, Garcia, isabella.g@email.com, Mexico City, Mexico, 2023-02-14
10, Lucas, Rodriguez, lucas.r@email.com, Buenos Aires, Argentina, 2023-03-30
BOOKS DATA (14 records)
Columns: book_id, title, author, genre, price, publication_year, stock_quantity

1, The Great Gatsby, F. Scott Fitzgerald, Fiction, 12.99, 1925, 45
2, To Kill a Mockingbird, Harper Lee, Fiction, 14.99, 1960, 32
3, 1984, George Orwell, Science Fiction, 13.99, 1949, 28
4, Pride and Prejudice, Jane Austen, Romance, 11.99, 1813, 50
5, The Catcher in the Rye, J.D. Salinger, Fiction, 12.99, 1951, 22
6, Harry Potter and the Sorcerer Stone, J.K. Rowling, Fantasy, 19.99, 1997, 60
7, The Hobbit, J.R.R. Tolkien, Fantasy, 15.99, 1937, 38
8, Brave New World, Aldous Huxley, Science Fiction, 13.99, 1932, 25
9, The Lord of the Rings, J.R.R. Tolkien, Fantasy, 29.99, 1954, 41
10, Animal Farm, George Orwell, Fiction, 10.99, 1945, 55
11, Fahrenheit 451, Ray Bradbury, Science Fiction, 12.99, 1953, 30
12, The Great Adventure, John Anderson, Fiction, 16.99, 2020, 18
13, Mystery in Paris, Marie Dubois, Mystery, 14.99, 2019, 27
14, Romance in Rome, Isabella Rossi, Romance, 13.99, 2021, 35
ORDERS DATA (18 records)
Columns: order_id, customer_id, book_id, order_date, quantity, total_amount

1, 1, 1, 2023-05-10, 2, 25.98
2, 1, 6, 2023-05-15, 1, 19.99
3, 2, 3, 2023-05-12, 1, 13.99
4, 3, 2, 2023-05-11, 3, 44.97
5, 4, 7, 2023-05-13, 1, 15.99
6, 5, 9, 2023-05-14, 2, 59.98
7, 2, 4, 2023-05-16, 1, 11.99
8, 6, 6, 2023-05-17, 2, 39.98
9, 7, 1, 2023-05-18, 1, 12.99
10, 8, 8, 2023-05-19, 1, 13.99
11, 1, 10, 2023-06-01, 2, 21.98
12, 3, 5, 2023-06-02, 1, 12.99
13, 9, 11, 2023-06-03, 3, 38.97
14, 10, 12, 2023-06-04, 1, 16.99
15, 4, 13, 2023-06-05, 2, 29.98
16, 5, 14, 2023-06-06, 1, 13.99
17, 2, 6, 2023-06-07, 1, 19.99
18, 7, 3, 2023-06-08, 2, 27.98


PRACTICE QUESTIONS
Display all books with their titles and prices, ordered by price (lowest to highest)
Find all distinct countries where customers are from
Find all books whose titles start with "The"
Change the column name first_name to customer_first_name in the customers table
Find all books in the Fantasy genre
Count the total number of orders in the database
Find the average price of books by genre, but only show genres with an average price greater than $14
Find all customers whose email addresses end with .com and are from either USA or UK
Display all customers with their full name in uppercase (concatenated first and last name),
original email, and city in lowercase.
Only show customers from USA or UK.
Find the total revenue, average order amount, maximum order amount, and
minimum order amount from all orders placed in June 2023.

*/





create table customers (
  customer_id serial primary key,
  first_name varchar(50),
  last_name varchar(50),
  email varchar(100),
  city varchar(50),
  country varchar(50),
  registration_date date
);

create table books (
  book_id int primary key,
  title varchar(200),
  author varchar(100),
  genre varchar(50),
  price decimal(10, 2),
  publication_year int,
  stock_quantity int
);

create table orders (
  order_id int primary key,
  customer_id int references customers (customer_id),
  book_id int references books (book_id),
  order_date date,
  quantity int,
  total_amount decimal(10, 2)
);

insert into
  customers (
    customer_id,
    first_name,
    last_name,
    email,
    city,
    country,
    registration_date
  )
values
    (1, 'John', 'Smith', 'john.smith@email.com', 'New York', 'USA', '2023-01-15'),
    (2, 'Emma', 'Johnson', 'emma.j@email.com', 'London', 'UK', '2023-02-20'),
    (3, 'Michael', 'Brown', 'mbrown@email.com', 'Toronto', 'Canada', '2023-01-10'),
    (4, 'Sophia', 'Davis', 'sophia.d@email.com', 'Sydney', 'Australia', '2023-03-05'),
    (5, 'James', 'Wilson', 'jwilson@email.com', 'New York', 'USA', '2023-02-28'),
    (6, 'Oliver', 'Taylor', 'oliver.t@email.com', 'London', 'UK', '2023-04-12'),
    (7, 'Ava', 'Anderson', 'ava.anderson@email.com', 'Los Angeles', 'USA', '2023-03-18'),
    (8, 'William', 'Martinez', 'w.martinez@email.com', 'Madrid', 'Spain', '2023-01-25'),
    (9, 'Isabella', 'Garcia', 'isabella.g@email.com', 'Mexico City', 'Mexico', '2023-02-14'),
    (10, 'Lucas', 'Rodriguez', 'lucas.r@email.com', 'Buenos Aires', 'Argentina', '2023-03-30');


insert into books(book_id, title, author, genre, price, publication_year, stock_quantity)
values
    (1, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 12.99, 1925, 45),
    (2, 'To Kill a Mockingbird', 'Harper Lee', 'Fiction', 14.99, 1960, 32),
    (3, '1984', 'George Orwell', 'Science Fiction', 13.99, 1949, 28),
    (4, 'Pride and Prejudice', 'Jane Austen', 'Romance', 11.99, 1813, 50),
    (5, 'The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 12.99, 1951, 22),
    (6, 'Harry Potter and the Sorcerer Stone', 'J.K. Rowling', 'Fantasy', 19.99, 1997, 60),
    (7, 'The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 15.99, 1937, 38),
    (8, 'Brave New World', 'Aldous Huxley', 'Science Fiction', 13.99, 1932, 25),
    (9, 'The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 29.99, 1954, 41),
    (10, 'Animal Farm', 'George Orwell', 'Fiction', 10.99, 1945, 55),
    (11, 'Fahrenheit 451', 'Ray Bradbury', 'Science Fiction', 12.99, 1953, 30),
    (12, 'The Great Adventure', 'John Anderson', 'Fiction', 16.99, 2020, 18),
    (13, 'Mystery in Paris', 'Marie Dubois', 'Mystery', 14.99, 2019, 27),
    (14, 'Romance in Rome', 'Isabella Rossi', 'Romance', 13.99, 2021, 35);

insert into orders(order_id, customer_id, book_id, order_date, quantity, total_amount)
values
(1, 1, 1, '2023-05-10', 2, 25.98),
    (2, 1, 6, '2023-05-15', 1, 19.99),
    (3, 2, 3, '2023-05-12', 1, 13.99),
    (4, 3, 2, '2023-05-11', 3, 44.97),
    (5, 4, 7, '2023-05-13', 1, 15.99),
    (6, 5, 9, '2023-05-14', 2, 59.98),
    (7, 2, 4, '2023-05-16', 1, 11.99),
    (8, 6, 6, '2023-05-17', 2, 39.98),
    (9, 7, 1, '2023-05-18', 1, 12.99),
    (10, 8, 8, '2023-05-19', 1, 13.99),
    (11, 1, 10, '2023-06-01', 2, 21.98),
    (12, 3, 5, '2023-06-02', 1, 12.99),
    (13, 9, 11, '2023-06-03', 3, 38.97),
    (14, 10, 12, '2023-06-04', 1, 16.99),
    (15, 4, 13, '2023-06-05', 2, 29.98),
    (16, 5, 14, '2023-06-06', 1, 13.99),
    (17, 2, 6, '2023-06-07', 1, 19.99),
    (18, 7, 3, '2023-06-08', 2, 27.98);insert into orders(order_id, customer_id, book_id, order_date, quantity, total_amount)
values
(1, 1, 1, '2023-05-10', 2, 25.98),
    (2, 1, 6, '2023-05-15', 1, 19.99),
    (3, 2, 3, '2023-05-12', 1, 13.99),
    (4, 3, 2, '2023-05-11', 3, 44.97),
    (5, 4, 7, '2023-05-13', 1, 15.99),
    (6, 5, 9, '2023-05-14', 2, 59.98),
    (7, 2, 4, '2023-05-16', 1, 11.99),
    (8, 6, 6, '2023-05-17', 2, 39.98),
    (9, 7, 1, '2023-05-18', 1, 12.99),
    (10, 8, 8, '2023-05-19', 1, 13.99),
    (11, 1, 10, '2023-06-01', 2, 21.98),
    (12, 3, 5, '2023-06-02', 1, 12.99),
    (13, 9, 11, '2023-06-03', 3, 38.97),
    (14, 10, 12, '2023-06-04', 1, 16.99),
    (15, 4, 13, '2023-06-05', 2, 29.98),
    (16, 5, 14, '2023-06-06', 1, 13.99),
    (17, 2, 6, '2023-06-07', 1, 19.99),
    (18, 7, 3, '2023-06-08', 2, 27.98);

-- 1.....
select title, price from books
order by price asc;

-- 2......
select distinct country as countries from customers;

-- 3......
select * from books
where title Ilike 'The%';

-- 4.....
alter table customers
rename column first_name to customer_first_name

-- 5.....
select * from books
where genre = 'Fantasy';

-- 6.....
-- select count(*) as "Total Order" from orders;


-- 7....
select genre, round(avg(price),2) from books
group by genre 
having avg(price) > 14;

-- 8....
select * from customers
where email Ilike '%.com' and country in ('USA','UK');

-- 9...
select  
  upper(concat(customer_first_name, ' ',last_name)) as "Full Name",
  email as "Email",
  lower(city) as "City", country
from customers
where country in ('USA','UK')


-- 10.....
select 
  sum(total_amount) as "total revenue",
  round(avg(total_amount),2) as "Average Amount",
  max(total_amount) as "Maximum Amount",
  min(total_amount) as "Minimum Amount",
  count(*) as "total_orders_in_june"
from orders
where order_date between '2023-06-01' and '2023-06-30'
-- .......











