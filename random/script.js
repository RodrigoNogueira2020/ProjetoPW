//Chame o módulo HTTP
var http = require("http");

//Crie um servidor HTTP para ouvir as requisições na porta 8000
http.createServer(function(request, response){

   // Configure o resposta HTTP header com o HTTP status e Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Envie a resposta do body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Imprima URL para acessar o servidor
console.log('Server running at http://127.0.0.1:8000/');
////////////////////////////////////////////////////////
const mysql = require("mysql");
const {response} = require("express");
const {addRevisao} = require('./www/js/funcoes')

const connOp = {
   host: "localhost",
   user: "root",
   password: "root",
   database: "BD/pw",
   multipleStatements: true //??????
};

function verDisciplinas(request, response){
   try{
     var conn = mysql.createConnection(conn);
     conn.connect();
     conn.query("SELECT Id_Disciplina, nome_disciplina, docente_disciplina FROM Disciplina ORDER BY Id_Disciplina",
        function(erro, rows, fields){
          if(erro){response.sendStatus(500);}
          else{response.render("Disciplina", {disciplinas: rows});}
        });
      conn.end();
     }
   catch(erro){console.log(erro);}
}

function listaAlunos(request, response){
   try{
     var conn = mysql.createConnection(conn);
     conn.connect();
     conn.query("SELECT Id_Aluno, nome_aluno, data_nascimento, genero, email_aluno FROM Aluno ORDER BY Id_Aluno",
        function (erro, rows, fields) {
          if(erro){response.sendStatus(500);}
          else{
            console.log("Números de alunos: " + rows.length);
            response.render("lista", {alunos: rows});
          }
        });
         conn.end();
       }
     catch(err){console.log(err);}
}

function perfilAluno(request, response){
   try{
     var conn = mysql.createConnection(conn);
     conn.connect();
     conn.query("SELECT Id_Aluno, nome_aluno, data_nascimento, genero, email_aluno, FROM Aluno WHERE Id_Aluno = ?", [request.params.Id_Aluno], //CAMPO QUE ENVIA O ID
        function (erro, rows, fields) {
          if(erro){response.sendStatus(500);}
          else{
            console.log("Número de alunos: " + rows.length);
            response.render("dados", {alunos: rows[0]});
          }
        });
        conn.end();
       }
     catch(erro){console.log(erro);}
}

function editarAluno(request, response){
   try{
      if(request.params.Id_Aluno != 0){
         var conn = mysql.createConnection(connOp);
         var sql= "CALL sp_teste(" + request.params.Id_Aluno +")";
         conn.connect();
         conn.query(sql,
            function (erro, rows, fields) {
               if(erro){response.sendStatus(500);}
               else{response.render("editar",{ editarAluno: rows[0]});}
            });
         conn.end();
      }
       else{response.render("editar", {editarAluno: dados});}
   }
     catch(erro){console.log(erro);}
}

function saveAluno(request, response){
   try{
      console.log("Save entry");
      var Id_Aluno = request.body.Id_Aluno;
      var Id_Turma = request.body.Id_Turma;
      var data_nascimento = request.body.data_nascimento;
      var email_aluno  = request.body.email_aluno;
      var nome_aluno  = request.body.nome_aluno;
      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "CALL sp_teste3(?, ?, ?, ?, ?, ?, ?, ?)"; //???????
      conn.query(sql, [Id_Aluno, Id_Turma, data_nascimento, email_aluno, nome_aluno],
         function(erro, rows, fields){
            if(erro){
             response.sendStatus(500);
             console.log(Id_Aluno, Id_Turma, data_nascimento, email_aluno, nome_aluno);
           }else{
             response.redirect("/alunos");
             console.log(Id_Aluno, Id_Turma, data_nascimento, email_aluno, nome_aluno);
           }
         });
       conn.end();
     }
     catch(erro){console.log(erro);}
}

function aluno(request, response){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect();
     conn.query("SELECT * FROM Disciplina",
        function(err, rows, fields){
          if(err){response.sendStatus(500);}
          else{
            console.log("Números de Alunos: " + rows.length);
            response.render("criarAluno",{ disciplina: rows });
          }
        });
     connection.end();
   }
     catch(err){console.log(err);}
}

function criarAluno(request, response){
   try{
      console.log("Save Entry");
      var Id_Aluno = request.body.Id_Aluno;
      var Id_Disciplina = request.body.Id_Disciplina;
      var nome_aluno = request.body.nome_aluno;
      var data_nascimento = request.body.data_nascimento;
      var genero  = request.body.genero;
      var email_aluno = request.body.email_aluno;
      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "CALL sp_teste4(?, ?, ?, ?, ?, ?, ?)";
      conn.query(sql, [Id_Aluno, Id_Disciplina, nome_aluno, data_nascimento, genero, email_aluno],
         function(erro, rows, fields){
            if(erro){
               console.log(erro);
               response.sendStatus(500);
               console.log(Id_Aluno, Id_Disciplina, nome_aluno, data_nascimento, genero, email_aluno);
               response.redirect("/criarAluno");
            }else{response.redirect("/alunos");}
         });
      conn.end();
   }
     catch(erro){console.log(erro);}
}

function criarDisciplina(request, response){
   try{
     console.log("Save Entry");
     var Id_Disciplina = request.body.Id_Disciplina;
     var nome_disciplina  = request.body.nome_disciplina;
     var docente_disciplina  = request.body.docente_disciplina;
     var conn = mysql.createConnection(connOp);
     conn.connect();
     var sql = "INSERT INTO Disciplina(Id_Disciplina, nome_disciplina, docente_disciplina) VALUES (?, ?, ?)";
     conn.query(sql [Id_Disciplina, nome_disciplina, docente_disciplina],
         function(erro, rows, fields){
           if(erro){
             console.log(erro);
             response.sendStatus(500);
             console.log(Id_Disciplina, nome_disciplina, docente_disciplina);
             response.redirect("/criarDisciplina");
           }else{response.redirect("/disciplinas");}
         });
         conn.end();
     }
     catch(erro){console.log(erro);}
}

function disciplina(request, response){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect();
     conn.query("select * from disciplina",
        function(erro, rows, fields){
          if(erro){response.sendStatus(500);}
          else{
            console.log("Número de disciplinas: " + rows.length);
            response.render("criarDisciplina", {disciplina: rows});
          }
        });
        conn.end();
       }
     catch(err){console.log(err);}
}

function editarDisciplina(request, response){
   try{
     var dados = {id: 0, nome: '', morada: ''}; //??????????
     if(request.params.Id_Disciplina != 0){
       var conn = mysql.createConnection(connOp);
       var sql = "CALL sp_Disciplina("+ request.params.Id_Disciplina +")";
       conn.connect();
       conn.query(sql,
         function (erro, rows, fields) {
           if(erro){
             response.sendStatus(500);
             console.log(request.params.Id_Disciplina);
           }else{response.render("editarDisciplina", {editarDisciplina: rows[0]});}
         });
         conn.end();
      }else{response.render("editarDisciplina", {editarDisciplina: dados});}
   }
     catch(erro){console.log(erro);}
}

function saveDisciplina(request, response){
   try{
     console.log("Save Entry");
     var Id_Disciplina = request.body.Id_Disciplina;
     var nome_disciplina = request.body.nome_disciplina;
     var docente_disciplina = request.body.docente_disciplina;
     var conn = mysql.createConnection(connOp);
     conn.connect();
     var sql = "CALL sp_EditarDisciplina(?, ?, ?)";
     conn.query(sql, [Id_Disciplina, nome_disciplina, docente_disciplina],
         function(erro, rows, fields){
           if(erro){
             console.log(erro);
             response.sendStatus(500);
           }else{response.redirect("/disciplinas");}
         });
      conn.end();
   }
     catch(erro){console.log(erro);}
}

function apagarAluno(request, response){
   try{
      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "CALL sp_teste5(" + request.params.Id_Aluno + ")";
      conn.query(sql,
         function (erro, rows, fields) {
           if(erro){
             response.sendStatus(500);
             console.log(erro);
           }else{response.redirect("/alunos");}
         });
      conn.end();
   }
     catch(erro){console.log(erro);}
}

function apagarDisciplina(request, response){
   try{
      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "DELETE FROM Disciplina WHERE id = " + request.params.Id_Disciplina;
      conn.query(sql,
         function(erro, rows, fields){
           if(erro){
             response.sendStatus(500);
             console.log(erro);
           }else{response.redirect("/disciplinas");}
         });
      conn.end();
   }
     catch(erro){console.log(erro);}
}

function turma(request, response){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect();
     conn.query("SELECT * FROM Aluno ORDER BY Id_Turma",
         function(err, rows, fields){
            if(err){response.sendStatus(500);}
            else{response.render("turma", {turmas: rows});}
         });
      conn.end();
   }
   catch(err){console.log(err);}
}

function obterRevisoes(request, response){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect();
     conn.query("CALL queryRevisao()",
         function(erro, rows, fields){
            if(erro){response.sendStatus(500);}
            else{response.render("revisoes", {revisoes: rows[0]});}
         });
      conn.end();
   }
   catch(erro){console.log(erro);}
}

function fecharRevisao(request, response){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect();
     conn.query("UPDATE Revisao SET efetivada = 1, fechada = 1 WHERE Id_Revisao = " + request.params.Id_Revisao,
         function(erro, rows, fields){
            console.log(rows);
            if(erro){response.sendStatus(500);}
            else{response.redirect("/revisoes");}
         });
      conn.end();
     }
   catch(erro){console.log(erro);}
}

function apagarRevisao(request, response){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect();
     conn.query("DELECT FROM Revisao WHERE Id_Revisao = " + request.params.Id_Revisao,
        function(erro, rows, fields){
          console.log(rows);
          if(erro){response.sendStatus(500);}
          else{response.redirect("/revisoes");}
        });
      conn.end();
   }
   catch(erro){console.log(erro);}
}

function agenda(request, response){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect();
     conn.query("CALL queryRevisao()",
        function(erro, rows, fields) {
          if(erro){response.sendStatus(500);}
          else{response.render("agenda", {agenda: rows});}
        });
      conn.end();
   }
   catch(erro){console.log(erro);}
}

function criarMarcacao(request, response, next){
   try{
     var conn = mysql.createConnection(connOp);
     conn.connect()
     var queries = [
       "SELECT * FROM Disciplina",
       "SELECT Id_Aluno, nome_aluno FROM Aluno"
     ]; // "insert into revisoes (diaRevisao, idDisciplina, idAluno, notaAntes, notaDepois, efetivada, fechada) values (?)"
     conn.query(queries.join(';'),
         function(erro, rows, fields){
            if(erro){
               response.sendStatus(500);
               console.log(erro);
            }else{
               console.log(rows[0]);
               console.log(rows[1]);
               response.render("criarMarcacao", {alunoDisciplina: rows[0], alunos: rows[1]});
            } 
         });
      conn.end();
   }
   catch(erro){console.log(erro);}
}

function salvarMarcacao(request, response){
   try {
      var Id_Revisao = null;
      var dia_revisao = request.body.dia_revisao;
      var Id_Disciplina = request.body.Id_Disciplina;
      var Id_Aluno = request.body.Id_Aluno;
      var nota_antes_revisao = request.body.nota_antes_revisao;
      var nota_pos_revisao  = request.body.nota_pos_revisao;
      var efetivada = 0;
      var fechada = 0;
      var conn = mysql.createConnection(connOp)
      var query = "INSERT INTO Revisao VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
      conn.connect() // "insert into revisoes (diaRevisao, idDisciplina, idAluno, notaAntes, notaDepois, efetivada, fechada) values (?)"
      conn.query(query, [Id_Revisao, dia_revisao, Id_Disciplina, Id_Aluno, nota_antes_revisao, nota_pos_revisao, efetivada, fechada],
         function(erro, rows, fields){
            if(erro){
               response.sendStatus(500);
               console.log(erro);
            }else{response.redirect("/revisoes");}
         });
      conn.end();
   }
   catch(erro){console.log(erro);}
}

function verCreditos(request, response){
   try{
      var conn = mysql.createConnection(connOp)
      conn.connect() // "insert into revisoes (diaRevisao, idDisciplina, idAluno, notaAntes, notaDepois, efetivada, fechada) values (?)"
      conn.query("SELECT * FROM Aluno",
         function(erro, rows, fields){
            if(erro){response.sendStatus(500);}
            else{response.render("creditos", {agenda: rows});}
         });
      conn.end();
   }
   catch(erro){console.log(erro);}
} 