var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());

var datos = [{nombre: 'Cosme', apellido: 'Fulanito'}];

app.get('/usuarios', function(req, res) {
  res.json({
    datos: datos
  });
});

app.get('/usuarios/:id', function(req, res) {
  var id = req.params.id - 1;
  if (!datos[id]) return res.sendStatus(404);
  res.json(datos[id]);
});

app.post('/usuarios', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  datos.push(req.body);
  res.json({id: datos.length});
});

app.put('/usuarios/:id', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  var id = req.params.id - 1;
  if (!datos[id]) return res.sendStatus(404);
  datos[id] = req.body;
  res.sendStatus(204);
});

app.delete('/usuarios/:id', function(req, res) {
  var id = req.params.id - 1;
  if (!datos[id]) return res.sendStatus(404);
  datos.splice(id, 1);
  res.sendStatus(204);
});

app.listen(8008, function () {
  console.log('Express escuchando en http://localhost:8008/usuarios');
});