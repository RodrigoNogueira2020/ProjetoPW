var http = require("http");

http.createServer(function(request, response){
   response.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

const mysql = require("mysql");
const {response} = require("express");

const connOp = {
   host: "localhost",
   user: "root",
   password: "root",
   database: "pw",
   multipleStatements: true
};


//TURMA
function turma(request, response){
   try{
      var conn = mysql.createConnection(connOp);
      conn.connect();
      conn.query("SELECT * FROM Aluno ORDER BY Id_Turma",
         function(erro, rows, fields){
            if(erro){response.sendStatus(500);}
            else{response.render("turma", {turmas: rows});}
         });
      conn.end();
   }
   catch(erro){console.log(erro);}
}

//DISCIPLINA
function verDisciplinas(request, response){
   try{
      var conn = mysql.createConnection(conn);
      conn.connect();
      conn.query("SELECT * FROM Disciplina ORDER BY Id_Disciplina",
         function(erro, rows, fields){
            if(erro){response.sendStatus(500);}
            else{response.render("Disciplina", {disciplinas: rows});}
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
      var sql = "INSERT INTO Disciplina VALUES(?, ?, ?)";
      conn.query(sql, [Id_Disciplina, nome_disciplina, docente_disciplina],
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

function editarDisciplina(request, response){
   try{
      var dados = {Id_Disciplina: 0, nome_disciplina: '', morada: ''};
      if(request.params.Id_Disciplina != 0){
         var conn = mysql.createConnection(connOp);
         var sql = "CALL sp_Disciplina("+ request.params.Id_Disciplina +")";
         conn.connect();
         conn.query(sql,
            function(erro, rows, fields){
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

function guardarDisciplina(request, response){
   try{
      console.log("Save Entry");

      var Id_Disciplina = request.body.Id_Disciplina;
      var nome_disciplina = request.body.nome_disciplina;
      var docente_disciplina = request.body.docente_disciplina;

      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "CALL sp_guardarDisciplina(?, ?, ?)";
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

function disciplina(request, response){
   try{
      var conn = mysql.createConnection(connOp);
      conn.connect();
      conn.query("SELECT * FROM DISCIPLINA",
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

function apagarDisciplina(request, response){
   try{
      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "DELETE FROM Disciplina WHERE Id_Disciplina = " + request.params.Id_Disciplina;
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

//ALUNO
function listarAlunos(request, response){
   try{
      var conn = mysql.createConnection(conn);
      conn.connect();
      conn.query("SELECT * FROM Aluno ORDER BY Id_Aluno",
         function(erro, rows, fields){
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

function editarAluno(request, response){
   try{
      if(request.params.Id_Aluno != 0){
         var conn = mysql.createConnection(connOp);
         var sql = "CALL sp_editarAluno(" + request.params.Id_Aluno +")";
         conn.connect();
         conn.query(sql,
            function(erro, rows, fields){
               if(erro){response.sendStatus(500);}
               else{response.render("editar", {editarAluno: rows[0]});}
            });
         conn.end();
      }
      else{response.render("editar", {editarAluno: dados});}
   }
   catch(erro){console.log(erro);}
}

function apagarAluno(request, response){
   try{
      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "CALL sp_apagarAluno(" + request.params.Id_Aluno + ")";
      conn.query(sql,
         function(erro, rows, fields){
            if(erro){
               response.sendStatus(500);
               console.log(erro);
            }else{response.redirect("/alunos");}
         });
      conn.end();
   }
   catch(erro){console.log(erro);}
}

function guardarAluno(request, response){
   try{
      console.log("Save entry");

      var Id_Aluno = request.body.Id_Aluno;
      var Id_Turma = request.body.Id_Turma;
      var data_nascimento = request.body.data_nascimento;
      var email_aluno  = request.body.email_aluno;
      var nome_aluno  = request.body.nome_aluno;

      var conn = mysql.createConnection(connOp);
      conn.connect();
      var sql = "CALL sp_guardarAluno(?, ?, ?, ?, ?, ?, ?, ?)";
      conn.query(sql, [Id_Aluno, Id_Turma, nome_aluno, data_nascimento, email_aluno],
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

function perfilAluno(request, response){
   try{
      var conn = mysql.createConnection(conn);
      conn.connect();
      conn.query("SELECT Id_Aluno, nome_aluno, data_nascimento, genero, email_aluno FROM Aluno WHERE Id_Aluno = ?", [request.params.Id_Aluno], //CAMPO QUE ENVIA O ID
         function(erro, rows, fields){
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

function aluno(request, response){
   try{
      var conn = mysql.createConnection(connOp);
      conn.connect();
      conn.query("SELECT * FROM Disciplina",
         function(erro, rows, fields){
            if(erro){response.sendStatus(500);}
            else{
               console.log("Números de Alunos: " + rows.length);
               response.render("criarAluno", {disciplina: rows});
            }
         });
      connection.end();
   }
   catch(erro){console.log(erro);}
}

module.exports.turma = turma;
module.exports.verDisciplinas = verDisciplinas;
module.exports.criarDisciplina = criarDisciplina;
module.exports.editarDisciplina = editarDisciplina;
module.exports.guardarDisciplina = guardarDisciplina;
module.exports.disciplina = disciplina;
module.exports.apagarDisciplina = apagarDisciplina;
module.exports.listarAlunos = listarAlunos;
module.exports.criarAluno = criarAluno;
module.exports.editarAluno = editarAluno;
module.exports.apagarAluno = apagarAluno;
module.exports.guardarAluno = guardarAluno;
module.exports.perfilAluno = perfilAluno;
module.exports.aluno = aluno;