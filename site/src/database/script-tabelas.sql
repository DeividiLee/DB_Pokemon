
create database if not exists pokemon;
use pokemon;

drop database pokemon;

use pokemon;
select * from todos_pokemon;
alter table todos_pokemon add constraint primary key (idPokemon); -- precisa definir a pk na tabela todos_pokemon


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table team_pokemon (
idteam int auto_increment,
fkPokemon int,constraint FKP
	foreign key (fkPokemon) references todos_pokemon(idPokemon),
fkUsuario int,
	  constraint FKU foreign key (fkUsuario) references usuario(id),
primary key(idteam, fkPokemon, fkUsuario)
);

create table mensagem (
	idMensagem int primary key auto_increment,
	mensagem varchar(250)
)
select * from team_pokemon;
select * from usuario;

insert into usuario values (
null,'davi','davi.lee@sptech.school','12345678!');

SELECT * FROM team_pokemon join todos_pokemon on idPokemon = fkPokemon join usuario on id = fkusuario where id = 1;


