const app = require('./app');
const Product = require('./db/Product');
const conn = require('./db/conn');

const port = process.env.PORT || 3000;

const products = [
  {
    name: 'Foo',
    price: '3.00',
    salePercentage: '0.20',
    availability: 'instock'
  },
  {
    name: 'Bar',
    price: '8.00',
    salePercentage: '0.00',
    availability: 'instock'
  },
  {
    name: 'Bazz',
    price: '4.00',
    salePercentage: '0.00',
    availability: 'backordered'
  },
  {
    name: 'Quq',
    price: '2.00',
    salePercentage: '0.00',
    availability: 'discontinued'
  }
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
