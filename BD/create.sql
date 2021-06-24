/*-------------------- RODRIGO NOGUEIRA, 200262002 --------------------*/
/*-------------------- RICARDO REIS, 200262024 --------------------*/

drop database if exists pw;
create database if not exists pw;
use pw;

create table Turma(
	Id_Turma int primary key auto_increment not null,
    nome_turma varchar(50) not null,
    ano_turma int not null,
    reponsavel_turma varchar(50) not null,
    email_reponsavel_turma varchar(200) not null,
    curso varchar(200)  not null
);

create table Aluno(
	Id_Aluno int primary key auto_increment not null,
    Id_Turma int,
    nome_aluno varchar(50) not null,
    data_nascimento date not null,
    genero char(1) not null,
    email_aluno varchar(50) not null,
    foreign key (Id_Turma) references Turma(Id_Turma)
);

create table Disciplina(
	Id_Disciplina int primary key auto_increment not null,
    nome_disciplina varchar(50) not null,
    docente_disciplina varchar(50) not null
);

create table Inscricao(
    Id_Disciplina int,
    Id_Aluno int,
    nota int not null,
    foreign key (Id_Disciplina) references Disciplina(Id_Disciplina),
	foreign key (Id_Aluno) references Aluno(Id_Aluno)
);

create table Revisao(
	Id_Revisao int primary key auto_increment not null,
    dia_revisao date not null,
    Id_Disciplina int,
    Id_Aluno int,
    nota_antes_revisao int not null,
    nota_pos_revisao int not null,
    efetivada boolean not null,
    fechada boolean not null,
    foreign key (Id_Disciplina) references Disciplina(Id_Disciplina),
	foreign key (Id_Aluno) references Aluno(Id_Aluno)
);