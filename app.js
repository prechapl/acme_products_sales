const express = require('express');
const app = express();
const path = require('path');
const Product = require('./db/Product');

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html')));

app.get('/products', (req, res, next) => {
  Product.findAll().then(products => res.send(products));
});

app.post('/src/products');

app.delete('/products/:id', (req, res, next) => {
  Product.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
  next();
});

module.exports = app;
