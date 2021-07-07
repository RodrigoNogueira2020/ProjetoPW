"use strict";
const mysql = require("mysql");
const options = require("./connection-options.json");

function getAluno(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT * FROM aluno";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "aluno": rows });
        }
    });
}
module.exports.getAluno = getAluno;

/**
 * Função para retornar a lista de países da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getCountries(req, res) {
    /** @todo Completar */
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id, name, shortName FROM country";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "country": rows });
        }
    });

}
module.exports.getCountries = getCountries;
