"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));


app.listen(8081, function () {
    console.log("Server running at http://localhost:8081");
});