-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database pokemon;
use pokemon;
drop database pokemon;

use pokemon;
select * from todos_pokemon;
alter table todos_pokemon add constraint primary key (idPokemon); -- precisa definir a pk na tabela todos_pokemon
drop table todos_pokemon;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

create table team_pokemon (
idteam int auto_increment,
fkPokemon int,constraint FKP
	foreign key (fkPokemon) references todos_pokemon(idPokemon),
fkUsuario int,
	  constraint FKU foreign key (fkUsuario) references usuario(id),
primary key(idteam, fkPokemon, fkUsuario)
);

select * from team_pokemon;
drop table team_pokemon;
drop table usuario;

insert into usuario values (
null,'davi','davi.lee@sptech.school',1234567);




/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
