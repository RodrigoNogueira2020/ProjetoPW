function IDgenerator(){
    var d = new Date();
    var n = d.valueOf();
    return n;
}

class Turma{
    constructor(idTurma, nome, ano, responsavel, emailResponsavel, curso){
        if(idTurma > 0){
            this.idTurma = idTurma;
        }
        
        IDgenerator = this.idTurma;
        this.idTurma = idTurma; //FUNCIONA???
        
        if(nome !== null){ 
            this.nome = nome;
        }
        if(ano < 0 || ano > 12){
            this.ano = ano;
        }
        if(responsavel !== null){ 
            this.responsavel = responsavel;
        }
        if(emailResponsavel !== null){ 
            this.emailResponsavel = emailResponsavel;
        }
        if(curso !== null){ 
            this.curso = curso;
        }
    }
}

class Aluno{
    constructor(idAluno, nome, dataNascimento, genero, email, alunoDisciplina, foto){
        if(idAluno > 0){
            this.idAluno = idAluno;
        }
        if(nome !== null){ 
            this.nome = nome;
        }
        if(dataNascimento < 0 || dataNascimento > 12){
            this.dataNascimento = dataNascimento;
        }
        if(genero.toUpperCase() === 'M' || genero.toUpperCase() === 'F'){ 
           this.genero = genero;
        }
        if(email !== null){ 
            this.email = email;
        }
        if(alunoDisciplina !== null){ 
            this.alunoDisciplina = alunoDisciplina;
        }
        if(curso !== null){ 
            this.curso = curso;
        }
        if(foto !== null){ 
            this.foto = foto;
        }
    }
}

class Disciplina{
    constructor(idDisciplina, nome, docente){
        if(idDisciplina > 0){
            this.idDisciplina = idDisciplina;
        }
        if(nome !== null){ 
            this.nome = nome;
        }
        if(docente !== null){
            this.docente = docente;
        }
    }
}

class Inscricao{
    constructor(idInscricao, idDisciplina, idAluno, nota){
        if(idInscricao > 0){
            this.idInscricao = idInscricao;
        }
        if(idDisciplina > 0){
            this.idDisciplina = idDisciplina;
        }
        if(idAluno > 0){
            this.idAluno = idAluno;
        }
        if(nota < 0 || nota > 20){
            this.nota = nota;
        }
    }
}

class Revisao{
    constructor(diaRevisao, idDisciplina, idAluno, notaAntesRevisao, notaDepoisRevisao, efetivada, fechada){
        if(diaRevisao !== null){
            this.diaRevisao = diaRevisao;
        }
        if(idDisciplina > 0){
            this.idDisciplina = idDisciplina;
        }
        if(idAluno > 0){
            this.idAluno = idAluno;
        }
        if(this.notaAntesRevisao < 0 || notaAntesRevisao > 20){
            this.notaAntesRevisao = notaAntesRevisao;
        }
        if(this.notaDepoisRevisao < 0 || notaDepoisRevisao > 20){
            this.notaDepoisRevisao = notaDepoisRevisao;
        }
        if(efetivada.toUpperCase() === 'S' || efetivada.toUpperCase() === 'N'){
            this.efetivada = efetivada;
        }
        if(fechada.toUpperCase() === 'S' || fechada.toUpperCase() === 'N'){
            this.fechada = fechada;
        }
    }
}
