const app = require('./app');
const Product = require('./db/Product');
const conn = require('./db/conn');

const port = process.env.PORT || 3000;

const products = [
  { name: 'Foo', price: 3, salePercentage: 0.2, availabilty: 'instock' },
  { name: 'Bar', price: 8, salePercentage: 0.0, availabilty: 'instock' },
  { name: 'Bazz', price: 4, salePercentage: 0.0, availabilty: 'backordered' },
  { name: 'Quq', price: 2, salePercentage: 0.0, availabilty: 'discontinued' }
];

const syncAndSeed = () => {
  return conn
    .sync({ force: true })
    .then(() => products.map(product => Product.create(product)));
};

syncAndSeed()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(e => {
    console.log(e);
  });
