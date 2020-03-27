const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

// Clusters Atlas Mongodb -> https://www.mongodb.com/cloud/atlas
mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-7bqmv.mongodb.net/week10?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

app.use(express.json());
app.use(routes);

app.listen(3333);

// Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)
