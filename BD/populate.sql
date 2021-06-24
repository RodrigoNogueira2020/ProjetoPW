/*-------------------- RODRIGO NOGUEIRA, 200262002 --------------------*/
/*-------------------- RICARDO REIS, 200262024 --------------------*/

use pw;

insert into turma values(1, 'Turma A', 12, 'Rui Santos', 'rui.santos1@gmail.com', 'Tecnologias e Programação de Sistemas Informáticos');

insert into aluno values(1, 1, 'Diogo Silva', str_to_date('2002.11.03', '%Y.%m.%d'), 'F', 'diogo.silva1@gmail.com');
insert into aluno values(2, 1, 'André Nunes', str_to_date('2002.05.15', '%Y.%m.%d'), 'F', 'andre.nunes1@gmail.com');
insert into aluno values(3, 1, 'Francisco Pereira', str_to_date('2002.12.04', '%Y.%m.%d'), 'F', 'xico.pereira1@gmail.com');
insert into aluno values(4, 1, 'Rodrigo Nogueira', str_to_date('2002.12.29', '%Y.%m.%d'), 'F', 'rodrigo.nogueira1@gmail.com');
insert into aluno values(5, 1, 'Gonçalo Meireles', str_to_date('2002.07.20', '%Y.%m.%d'), 'F', 'goncalo.meireles1@gmail.com');

insert into disciplina values(1, 'Programação', 'Fábio Varanda');
insert into disciplina values(2, 'PW', 'Rui Santos');
insert into disciplina values(3, 'IF', 'Rossana Santos');
insert into disciplina values(4, 'Base de dados', 'José Santos');
insert into disciplina values(5, 'Matemática', 'Anabela Pereira');

insert into inscricao values(1, 1, 10);
insert into inscricao values(2, 2, 12);
insert into inscricao values(3, 3, 14);
insert into inscricao values(4, 4, 16);
insert into inscricao values(5, 5, 18);

insert into revisao values(1, str_to_date('2020.12.01', '%Y.%m.%d'), 1, 1, 10, 12, true, false);
insert into revisao values(2, str_to_date('2020.12.05', '%Y.%m.%d'), 2, 2, 12, 14, true, false);
insert into revisao values(3, str_to_date('2020.12.10', '%Y.%m.%d'), 3, 3, 14, 16, false, true);
insert into revisao values(4, str_to_date('2020.12.15', '%Y.%m.%d'), 4, 4, 18, 20, false, true);
insert into revisao values(5, str_to_date('2020.12.20', '%Y.%m.%d'), 5, 5, 14, 19, true, false);