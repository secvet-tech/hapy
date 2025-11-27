const os = require('os');
const fs = require('fs');
const path = require('path');
const url = require('url');
const net = require('net');
const os = require('os');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'markup')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'scripts')));
app.get('/', function (req, res) {
    res.send();
});
app.listen(3000);
console.log('Express started on port 3000');// JavaScript source code
