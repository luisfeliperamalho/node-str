'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//conecta ao banco
mongoose.connect('mongodb+srv://admin:admin@sirun-db.5htmve3.mongodb.net/?retryWrites=true&w=majority');

//Carrega os models
const Product = require('./models/product');

//Carrega rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
