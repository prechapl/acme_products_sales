const Sequelize = require('sequelize');
const conn = require('./conn');

const Product = conn.define('product', {
  name: Sequelize.STRING,
  price: Sequelize.STRING,
  salePercentage: Sequelize.STRING,
  availability: Sequelize.STRING
});

module.exports = Product;
