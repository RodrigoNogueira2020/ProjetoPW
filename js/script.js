function supports_html5_storage(){
    try{return 'localStorage' in window && window['localStorage'] !== null;}
    catch(e){return false;}
}

if(!supports_html5_storage()){alert('ARMAZENAMENTO LOCAL NÃO SUPORTADO!');}

function guardarDados(){
    localStorage["turma"] = JSON.stringify(turma);
    localStorage["aluno"] = JSON.stringify(aluno);
    localStorage["disciplina"] = JSON.stringify(disciplina);
    localStorage["inscricao"] = JSON.stringify(inscricao);
}

class Turma{
    constructor(id, ano, nome, responsavel, emailRespo, curso){
        if(id >= 0){this.id = id;}
        if(nome !== null || nome == ""){this.nome = nome;}
        if(responsavel !== null || responsavel == ""){this.responsavel = responsavel;}
        if(emailRespo !== null || emailRespo == ""){this.emailRespo = emailRespo;}
        if(ano >= 1 || ano <= 12){this.ano = ano;}
        if(curso !== null || curso == ""){this.curso = curso;}
    }

    get getId(){return this.id;}
    get getNome(){return this.nome;}
    get getAno(){return this.ano;}
    get getResponsavel(){return this.responsavel;}
    get getEmail(){return this.emailRespo;}
    get getCurso(){return this.curso;}

    set setNome(newNome){if(newNome){this.nome = newNome;}}
    set setAno(newAno){if(newAno){this.ano = newAno;}}
    set setResponsavel(newResponsavel){if(newResponsavel){this.responsavel = newResponsavel;}}
    set setEmail(newEmail){if(newEmail){this.emailRespo = newEmail;}}
    set setCurso(newCurso){if(newCurso){this.curso = newCurso;}}
}

class Aluno{
    constructor(id, nome, dataNascimento, genero, email, foto){
        if(id >= 0){this.id = id;}
        if(nome !== null || nome == ""){this.nome = nome;}
        if(dataNascimento !== null || dataNascimento == ""){this.dataNascimento = dataNascimento;}
        if(genero !== null || genero == ""){this.genero = genero;}
        if(email !== null || email == ""){this.email = email;}
        if(foto !== null || foto == ""){this.foto = foto;}
    }

    get getId(){return this.id;}
    get getNome(){return this.nome;}
    get getData(){return this.dataNascimento;}
    get getEmail(){return this.email;}
    get getGenero(){return this.genero;}
    get getFoto(){return this.foto;}

    set setNome(newNome){if(newNome){ this.nome = newNome;}}
    set setData(newData){if(newData){this.dataNascimento = newData;}}
    set setGenero(newGenero){if(newGenero){this.genero = newGenero;}}
    set setEmail(newEmail){if(newEmail){this.email = newEmail;}}
}

class Disciplina{
    constructor(id, nome, docente){
        if(id >= 0){this.id = id;}
        if(nome !== null || nome == ""){this.nome = nome;}
        if(docente !== null || docente == ""){this.docente = docente;}
    }

    get getId(){return this.id;}
    get getNome(){return this.nome;}
    get getDocente(){return this.docente;}

    set setNome(newName){if(newName){this.nome = newName;}}
    set setDocente(newDocente){if(newDocente){this.docente = newDocente;}}
}

class Inscricao{
    constructor(id, idDisciplina, idAluno, nota){
        if(id >= 0){this.id = id;}
        if(idDisciplina >= 0){this.idDisciplina = idDisciplina;  }
        if(idAluno >= 0){this.idAluno = idAluno;}
        if(nota >= 1 || nota <= 20){this.nota = nota;}
    }

    get getId(){return this.id;}
    get getIdDisciplina(){return this.idDisciplina;}
    get getIdAluno(){return this.idAluno;}
    get getNota(){return this.nota;}

    set setNota(newNota){if(newNota){this.nota = newNota;}}
}

class Revisao{
    constructor(diaRevisao, idDisciplina, idAluno, notaAntes, notaDepois, efetivada, fechada) {
        if(diaRevisao !== null || diaRevisao == ""){this.diaRevisao = diaRevisao;}
        if(idDisciplina >= 0){this.idDisciplina = idDisciplina;}
        if(idAluno >= 0){this.idAluno = idAluno;}
        if(notaAntes >= 1 || notaAntes <= 20){this.notaAntes = notaAntes;}
        if(notaDepois >= 1 || notaDepois <= 20){this.notaDepois = notaDepois;}
        if(efetivada !== null || efetivada == ""){this.efetivada = efetivada;}
        if(fechada !== null || fechada == ""){this.fechada = fechada;}
    }

    get getDiaRevisao(){return this.diaRevisao;}
    get getIdDisciplina(){return this.idDisciplina;}
    get getId(){return this.id;}
    get getNotaAntes(){return this.notaAntes;}
    get getNotaDepois(){return this.notaDepois;}
    get getEfetivada(){return this.efetivada;}
    get getFechada(){return this.fechada;}

    set setDiaRevisao(newDia){if(newDia){this.diaRevisao = newDia;}}
    set setNotaDepois(newNota){if(newNota){this.diaRevisao = newNota;}}
    set setEfetivada(newEfetivada){if(newEfetivada){this.efetivada = newEfetivada;}}
    set setFechada(newFechada){if(newFechada){this.fechada = newFechada;}}
}

var disciplina = [];
var aluno = [];
var inscricao = [];

turma = new Turma(1, 12, "A", "Pedro Nunes", "pedro.nunes1@gmail.com", "TPSI");

if(localStorage["turma"] && localStorage["aluno"] && localStorage["disciplina"] && localStorage["inscricao"]){
    var turma_X = JSON.parse(localStorage["turma"]);

    turma = new Turma(turma_X.id, turma_X.ano, turma_X.nome, turma_X.responsavel, turma_X.emailRespo, turma_X.curso);

    aluno_X = JSON.parse(localStorage["aluno"]);
    for(var i of aluno_X){aluno.push(new Aluno(i.id, i.nome, i.dataNascimento, i.genero, i.email, i.foto));}

    disciplina_X = JSON.parse(localStorage["disciplina"]);
    for(var i of disciplina_X){disciplina.push(new Disciplina(i.id, i.nome, i.docente));}

    inscricao_X = JSON.parse(localStorage["inscricao"]);
    for(var i of inscricao_X){inscricao.push(new Inscricao(i.id, i.idDisciplina, i.idAluno, i.nota));}
}else{
    disciplina_X = new Disciplina(0, "PW", "Pedro Nunes");
    disciplina_Y = new Disciplina(1, "Matemática", "Stor X");
    disciplina_Z = new Disciplina(2, "Português", "Stora Y");
    disciplina.push(disciplina_X, disciplina_Y, disciplina_Z);

    aluno_X = new Aluno(0, "Rodrigo Nogueira", "2002-12-29", "Masculino", "rodrigo.nogueira1@gmail.com", "img/rodrigo.png");
    aluno_Y = new Aluno(1, "Ricardo Reis", "1999-10-07", "Masculino", "ricardo.reis1@gmail.com", "img/ricardo.png");
    aluno_Z = new Aluno(2, "Pedro Reis", "2001-03-14", "Masculino", "pedro.reis1@gmail.com", "img/pedro.png");
    aluno.push(aluno_X, aluno_Y, aluno_Z);

    inscricao_X = new Inscricao(0, disciplina[0].id,aluno[0].id,15);
    inscricao_Y = new Inscricao(1, disciplina[1].id,aluno[1].id,14);
    inscricao_Z = new Inscricao(2, disciplina[0].id,aluno[2].id,14);
    inscricao.push(inscricao_X, inscricao_Y, inscricao_Z);
    guardarDados();
}

function carregar(){
    var turmas_X = JSON.parse(localStorage.getItem('turma'));
    var turmas = new Turma(turmas_X.id, turmas_X.ano, turmas_X.nome, turmas_X.responsavel, turmas_X.emailRespo, turmas_X.curso);

    var s = "<table id='links'><tr><th>Nome</th><th>Data de nascimento</th><th>Género</th><th>E-mail</th><th>Imagem</th></th><th></th><th></tr>";
    s +="<tbody>";

    let lista_X = JSON.parse(localStorage.getItem('aluno'));
    let lista = [];
    for(let i of lista_X){lista.push(new Aluno(i.id, i.nome, i.dataNascimento, i.genero, i.email, i.foto));}

    for(let i=0;i<lista.length;i++){s += "<tr><td>"+lista[i].nome+"</td><td>" + lista[i].dataNascimento + "</th><th>" + lista[i].genero + "</th><th>" + lista[i].email + "</th><th><img src='#'></th><th><i class='far fa-edit iconDisci' style='margin-left: 0%; font-size: 110%' onclick=editarModal(" + '"' + lista[i].id + '"' + ")></i></th><th><i onclick= removerAluno(" + '"' + lista[i].id + '"' + ") class='far fa-trash-alt' style='margin-left: 0%; font-size: 105%'></i></tr>";}
    s += "</tbody></table>";
    $("#divTable").html(s);

    let disciplinas_X = JSON.parse(localStorage.getItem('disciplina'));
    let disciplinas = [];

    for(let i of disciplinas_X){disciplinas.push(new Disciplina(i.id, i.nome, i.docente));}

    var t = "<ul class='list'>";
    for(let i=0;i<disciplinas.length;i++){t += "<li class='list-item-1'>" + disciplinas[i].nome + "<i class='far fa-edit iconDisci' onclick=editarModalDisplay("+'"' + disciplinas[i].id +'"' + ")></i></th><th><i onclick=removerDisciplinas(" + '"' + disciplinas[i].id + '"' + ") class='far fa-trash-alt'></i></li>";}
    t += "</ul>";
    $("#divDisci").html(t);
    gerarLista();
}

function carregarInformacao(){
    let turmas_X = JSON.parse(localStorage.getItem('turma'));
    let turmas = new Turma(turmas_X.id, turmas_X.ano, turmas_X.nome, turmas_X.responsavel, turmas_X.emailRespo, turmas_X.curso);

    var s = "<table id='links'><tr><th>Nome</th><th>Data de nascimento</th><th>Género</th><th>E-mail</th><th>Imagem</th></tr>";
    s +="<tbody>";

    let lista_X = JSON.parse(localStorage.getItem('aluno'));
    let lista = [];

    for(let i of lista_X){lista.push(new Aluno(i.id, i.nome, i.dataNascimento, i.genero, i.email, i.foto));}

    for(let i=0;i<lista.length;i++){s += "<tr id='"+lista[i].id+"'><td>" + lista[i].nome + "</td><td>" + lista[i].dataNascimento.toLocaleString() + "</th><th>"+ lista[i].genero + "</th><th>" + lista[i].email + "</th><th><img src='#'></th></tr>";}
    s += "</tbody></table>";
    $("#divTable").html(s);

    let disciplinas_X = JSON.parse(localStorage.getItem('disciplina'));
    let disciplinas = [];

    for(let i of disciplinas_X){disciplinas.push(new Disciplina(i.id, i.nome, i.docente));}
    var t = "<ul class='list'>";

    for(let i=0;i<disciplinas.length;i++){t += "<li class='list-item-1 list-item-info' onclick='mostrarAlunos(" + disciplinas[i].id + ");'>" + disciplinas[i].nome + "</li>";}
    t += "</ul>";
    $("#divDisci").html(t);
    gerarLista();
}

function carregarMain(){
    let aluno_X = JSON.parse(localStorage.getItem('aluno'));
    let alunos = [];
    for(let i of aluno_X){alunos.push(new Aluno(i.id, i.nome, i.dataNascimento, i.genero, i.email, i.foto));}
    moment.locale("pt");
}

function adicionarAluno(){
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var anoNascimento = dataNascimento.split('-')[0];
    var generoObject = document.getElementsByName("optionsRadios");
    var genero;
    var idDisciplina = $("#disciplinaDrop :selected").val();
    var notaFinal = $("#notaFinal").val();
    var email = document.getElementById("email").value;
    var foto = "img/icon.png";

    for(var i=0;i<generoObject.length;i++){if(generoObject[i].checked){genero = generoObject[i].value;}}

    var errors = "";
    let alunos = JSON.parse(localStorage.getItem('aluno'));
    
    if(foto == null || foto == ""){errors += "\n INTRODUZA A FOTO!";}
    if(nome == null || nome == ""){errors += "\n INTRODUZA O NOME!";}
    if(genero == null || genero == ""){errors += "\n INTRODUZA O GÉNERO!";}
    if(dataNascimento == null || dataNascimento == ""){errors += "\n INTRODUZA A DATA DE NASCIMENTO!";}
    else if(anoNascimento >= new Date().getFullYear()){errors += "\n O ANO DE NASCIMENTO NÃO PODE SER IGUAL OU SUPERIOR AO DIA ATUAL!";}
    if(notaFinal == null || notaFinal == "" || notaFinal < 0 || notaFinal > 20){errors += "\n INTRODUZA UMA NOTA VÁLIDA!";}

    for(var i=0;i<alunos.length;i++){
        if((email == null || email == "") && i == 0){errors += "\n INTRODUZA O E-MAIL!";}
        else if(email == alunos[i].email){errors += "\n E-MAIL INTRODUZIDO JÁ ESTÁ REGISTADO!";}
    }

    if(errors != ""){
        alert(errors);
        return 0;
    }else{
        $("#myModal").modal("hide");

        let aluno_X = JSON.parse(localStorage.getItem('aluno'));
        let alunos = [];

        for(let i of aluno_X){alunos.push(new Aluno(i.id, i.nome, i.dataNascimento, i.genero, i.email, i.foto));}

        var i = alunos.length;
        var adiciona_aluno = new Aluno(i, nome, dataNascimento, genero, email, foto);
        aluno.push(adiciona_aluno);

        var inscricao_aluno = new Inscricao(inscricao.length, idDisciplina, adiciona_aluno.id, notaFinal);
        inscricao.push(inscricao_aluno);
        guardarDados();
        carregar();
    }
}

function editarAluno(){
    var id = document.getElementById("id").value;
    var idInscrisao;
    var idDisciplina = $("#disciplinaDrop :selected").val();
    var dataNascimento = document.getElementById("dataNascimento").value;
    var anoNascimento = dataNascimento.split('-')[0];
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var genero;
    var generoObject = document.getElementsByName("optionsRadios");
    var notaFinal = $("#notaFinal").val();

    for(var i=0;i<generoObject.length;i++){if(generoObject[i].checked){genero = generoObject[i].value;}}

    var errors = "";
    let alunos = JSON.parse(localStorage.getItem('aluno'));

    if(nome == null || nome == ""){errors += "INTRODUZA O NOME!";}
    if(genero == null || genero == ""){errors += "\n INTRODUZA O GÉNERO!";}
    if(dataNascimento == null || dataNascimento == ""){errors += "\n INTRODUZA A DATA DE NASCIMENTO!";
    }else if(anoNascimento >= new Date().getFullYear()){errors += "\n O ANO DE NASCIMENTO NÃO PODE SER IGUAL OU SUPERIOR AO DIA ATUAL!";}
    if(notaFinal == null || notaFinal == "" || notaFinal < 0 || notaFinal > 20){errors += "\n INTRODUZA UMA NOTA VÁLIDA!";}

    for(var i=0;i<alunos.length;i++){
        if((email == null || email == "") && i == 0){errors += "\n INTRODUZA O E-MAIL!";}
        else if(email == alunos[i].email && i != id){errors += "\n E-MAIL INTRODUZIDO JÁ ESTÁ REGISTADO!";}
    }

    if(errors != ""){
        alert(errors);
        return -1;
    }else{
        $("#myModal").modal("hide");
        $("#editButton").css("display","none");
        $("#createButton").css("display","block");

        var adiciona_aluno = new Aluno(id, nome, dataNascimento, genero, email, aluno[id].foto);
        aluno.splice(id, 1, adiciona_aluno);

        for(var i=0;i<inscricao.length;i++){if(inscricao[i].idAluno == id){idInscrisao = inscricao[i].id;}}

        var inscricao_aluno = new Inscricao(idInscrisao, idDisciplina, adiciona_aluno.id, notaFinal);
        inscricao.splice(idInscrisao, 1, inscricao_aluno);
        guardarDados();
        carregar();

        document.getElementById("nome").value = "";
        document.getElementById("dataNascimento").value = "";
        document.getElementById("email").value = "";
        document.getElementById("id").value = "";

        $('#disciplinaDrop option[value="0"]').attr('selected', true); 
        $("#notaFinal").val("");
        $("#modal-title-aluno").text("Adicionar aluno");
    }
}

function removerAluno(id){
    if(confirm("DESEJA ELIMINAR ESTE REGISTO DE ALUNO?")){
        let aluno_X = JSON.parse(localStorage.getItem('aluno'));
        let alunos = [];
        for(let i of aluno_X){alunos.push(new Aluno(i.id, i.nome, i.dataNascimento, i.genero, i.email, i.foto));}

        let inscricaos_X = JSON.parse(localStorage.getItem('inscricao'));
        let inscricaos = [];
        for(let i of inscricaos_X){inscricaos.push(new Inscricao(i.id, i.idDisciplina, i.idAluno, i.nota));}

        for(var i=0;i<alunos.length;i++){if(id == alunos[i].id){aluno.splice(i, 1);}}
        for(var i=0;i<inscricaos.length;i++){if(id == inscricaos[i].idAluno){inscricao.splice(i, 1);}}
        guardarDados();
        loops();
        carregar();
    }
}

function limparAluno(){
    document.getElementById("nome").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("id").value = "";
    $('#disciplinaDrop option[value="0"]').attr('selected', true); 
    $("#notaFinal").val("");
    $("#myModal").modal("hide");
    $("#editButton").css("display","none");
    $("#createButton").css("display","block");
    $("#modal-title-aluno").text("Adicionar aluno");
}

function mostrarAlunos(id){
    let inscricao_X = JSON.parse(localStorage.getItem('inscricao'));
    let inscricao = [];

    for(let i of inscricao_X){inscricao.push(new Inscricao(i.id, i.idDisciplina, i.idAluno, i.nota));}

    for(var i=0;i<inscricao.length;i++){document.getElementById(inscricao[i].idAluno).style.background = "rgb(245, 245, 245)";}

    for(var i=0;i<inscricao.length;i++){if(inscricao[i].idDisciplina == id){document.getElementById(inscricao[i].idAluno).style.background = "rgb(238, 238, 238)";}}
}

function adicionarDisciplina(){
    var nome = document.getElementById("discNome").value;
    var docente = document.getElementById("discDocente").value;
    var errors = "";
    let disciplinas = JSON.parse(localStorage.getItem('disciplina'));

    for(var i=0;i<disciplinas.length;i++){
        if((nome == null || nome == "") && i == 0){errors += "INTRODUZA O NOME!";}
        else if(nome == disciplinas[i].nome){errors += "A DISICPLINA '" + nome + "' JÁ EXISTE";}
    }

    if(docente == null || docente == ""){errors += "\n INSIRA O NOME DO DOCENTE!";}

    if(errors != ""){
        alert(errors);
        return -1;
    }else{
        $("#disciplinasModal").modal("hide");
    
        var newDisciplina = new Disciplina(disciplinas.length, nome, docente);
        disciplina.push(newDisciplina);
        guardarDados();
        carregar();

        document.getElementById("discNome").value = "";
        document.getElementById("discDocente").value = "";
    }
}

function editarDisciplina(){
    var nome = document.getElementById("discNome").value;
    var docente = document.getElementById("discDocente").value;
    var id = document.getElementById("discId").value;
    var errors = "";
    let disciplinas = JSON.parse(localStorage.getItem('disciplina'));

    for(var i=0;i<disciplinas.length;i++){
        if((nome == null || nome == "") && i == 0){errors += "INTRODUZA O NOME!";}
        else if(nome == disciplinas[i].nome && i != id){errors += "A DISCIPLINA '" + nome + "' JÁ EXISTE!";}
    }

    if(docente == null || docente == ""){errors += "\n INSIRA O NOME DO DOCENTE!";}

    if(errors != ""){
        alert(errors);
        return -1;
    }else{
        $("#editButtonDisc").css("display","none");
        $("#createButtonDisc").css("display","block");
        $("#disciplinasModal").modal("hide");

        var newDisciplina = new Disciplina(id, nome, docente);
        disciplina.splice(id, 1, newDisciplina);
        guardarDados();
        carregar();

        document.getElementById("discNome").value = "";
        document.getElementById("discDocente").value = "";
        $("#modal-title-disci").text("Adicionar disciplina");
    }
}

function removerDisciplinas(id){
    if(confirm("DESEJA ELIMINAR ESTE REGISTO DE DISCIPLINA?")){
        let disciplinas_X = JSON.parse(localStorage.getItem('disciplina'));
        let disciplinas = [];
        for(let i of disciplinas_X){disciplinas.push(new Disciplina(i.id, i.nome, i.docente));}
        for(var i=0;i<disciplinas.length;i++){
            if(id == disciplinas[i].id){
                disciplina.splice(i, 1);
                guardarDados();
                carregar();
            }
        }
        loops();
    }
}

function limparDisciplina(){
    document.getElementById("discNome").value = "";
    document.getElementById("discDocente").value = "";
    $("#editButtonDisc").css("display","none");
    $("#createButtonDisc").css("display","block");
    $("#modal-title-disci").text("Adicionar disciplina");
}

function editarModalDisplay(id){
    $("#disciplinasModal").modal("show");
    $("#modal-title-disci").text("Editar disciplina");
    $("#editButtonDisc").css("display","block");
    $("#createButtonDisc").css("display","none");
    document.getElementById("discNome").value = disciplina[id].nome;
    document.getElementById("discDocente").value = disciplina[id].docente;
    document.getElementById("discId").value = id;
}

function editarModal(id){
    $("#myModal").modal("show");
    $("#modal-title-aluno").text("Editar aluno");
    $("#editButton").css("display","block");
    $("#createButton").css("display","none");

    document.getElementById("nome").value = aluno[id].nome;
    document.getElementById("dataNascimento").value = aluno[id].dataNascimento;

    var generoObject = document.getElementsByName("optionsRadios");
    for(var i=0;i<generoObject.length;i++){if(generoObject[i].value == aluno[id].genero){generoObject[i].checked = true;}}

    document.getElementById("email").value = aluno[id].email;
    document.getElementById("id").value = id;
    
    var inscricao;
    for(var i=0;i<inscricao.length;i++){if(inscricao[i].idAluno == id){inscricao = inscricao[i];}}

    $('#disciplinaDrop option[value="' + inscricao.idDisciplina +'"]').attr('selected', true);
    $("#notaFinal").val(inscricao.nota);
}

function gerarLista(){
    let disciplinas_X = JSON.parse(localStorage.getItem('disciplina'));
    let disciplinas = [];

    for(let i of disciplinas_X){disciplinas.push(new Disciplina(i.id, i.nome, i.docente));}
    var s = "";

    for(let i=0;i<disciplinas.length;i++){s += "<option value=" + disciplinas[i].id + ">"+ disciplinas[i].nome +"</option>"}
    $("#disciplinaDrop").html(s);
}

function loops(){
    for(var i=0;i<aluno.length;i++){if(aluno[i].id != i){aluno[i].id = i;}}
    for(var i=0;i<inscricao.length;i++){if(inscricao[i].id != i){inscricao[i].id = i;}}
    for(var i=0;i<disciplina.length;i++){if(disciplina[i].id != i){disciplina[i].id = i;}}
    guardarDados();
}