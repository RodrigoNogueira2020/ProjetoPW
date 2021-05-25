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

/*var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["dataDeNascimento"] = document.getElementById("dataDeNascimento").value;
    formData["Genero"] = document.getElementById("Genero").value;
    formData["Email"] = document.getElementById("Email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dataDeNascimento;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Genero;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Apagar</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("dataDeNascimento").value = "";
    document.getElementById("Genero").value = "";
    document.getElementById("Email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dataDeNascimento").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Genero").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.dataDeNascimento;
    selectedRow.cells[2].innerHTML = formData.Genero;
    selectedRow.cells[3].innerHTML = formData.Email;
}

function onDelete(td) {
    if (confirm('Deseja apagar este registo?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tabela").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
*/

// CRUD VIDEO

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["dataDeNascimento"] = document.getElementById("dataDeNascimento").value;
    formData["Genero"] = document.getElementById("Genero").value;
    formData["Email"] = document.getElementById("Email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dataDeNascimento;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Genero;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("dataDeNascimento").value = "";
    document.getElementById("Genero").value = "";
    document.getElementById("Email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dataDeNascimento").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Genero").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.dataDeNascimento;
    selectedRow.cells[2].innerHTML = formData.Genero;
    selectedRow.cells[3].innerHTML = formData.Email;
}

function onDelete(td) {
    if (confirm('Deseja eliminar este registo?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide")){
            document.getElementById("fullNameValidationError").classList.add("hide");
        }
    }
    return isValid;
}