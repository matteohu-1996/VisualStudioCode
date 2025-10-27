-- Istruzioni DML
-- create
desc students;
insert into students(first_name, last_name, age, email, phone, codice_fiscale, data_nascita, address)
values('matteo','hu',29,'matteo.hu@edu.immagioneelavoro.it','333444555','masade89p02ssdsl','1996-09-17','via roma 10');
-- select
select * from students;
insert into students(first_name, last_name, age, email, phone, codice_fiscale, data_nascita, address)
values
('mario','rosso',30,'mario.rosso@edu.immagioneelavoro.it','333444000','masade89p02afksl','1940-01-25','via torino 10'),
('paola','verdi',35,'paola.verdi@edu.immagioneelavoro.it','333235456','aiappp89p02afksl','1967-01-25','via collegno 10'),
('giorgio','marron',56,'giorgio.marrone@edu.immagioneelavoro.it','345789000','fdge89p02afksl','1978-01-25','via michele 10');
insert into students(last_name, email) values('bruni','bruni@gmail.com');
insert into students(email) values('paolo@gmail.com');
-- update
update students set age = 22 where id = 9;
update students set first_name = 'marco', age = 45, data_nascita = '1995-01-01'where id = 8;
 use ep_2025;
 update students 
 set age = 31; 
update students set age = 20 where last_name = 'hu';
-- delete
delete from students where id = 10;
delete from students where age = 20;

-- DDL
truncate students;  

## commento
 
/*
	commento
*/