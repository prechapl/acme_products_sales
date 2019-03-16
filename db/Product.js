const Sequelize = require('sequelize');
const conn = require('./conn');

const Product = conn.define('product', {
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  salePercentage: Sequelize.DECIMAL,
  availabilty: Sequelize.STRING
});

module.exports = Product;
