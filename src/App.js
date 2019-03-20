import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Products from './Products';
import Home from './Home';
import Nav from './Nav';
import Sales from './Sales';
import Form from './CreateProducts';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.destroyProduct = this.destroyProduct.bind(this);
    this.saleCheck = this.saleCheck.bind(this);
    this.availabilityCheck = this.availabilityCheck.bind(this);
    this.refreshProducts = this.refreshProducts.bind(this);
    this.productCount = this.productCount.bind(this);
  }

  refreshProducts() {
    axios
      .get('/products')
      .then(res => res.data)
      .then(products => this.setState({ products }))
      .catch();
  }

  destroyProduct(id) {
    axios
      .delete(`/products/${id}`)
      .then(() => {
        let products = this.state.products;
        products = products.filter(product => product.id !== id);
        this.setState({ products });
      })
      .catch();
  }

  componentDidMount() {
    axios
      .get('/products')
      .then(res => res.data)
      .then(products => this.setState({ products }))
      .catch();
  }

  saleCheck(product) {
    const discount = product.salePercentage;
    const price = product.price;
    const salePrice = price - price * discount;
    if (discount > 0) {
      return (
        <li className="list-group-item">
          <s>Price ${price}</s>
          <div>Sale Price ${salePrice.toFixed(2)}</div>
        </li>
      );
    } else {
      return <li className="list-group-item">Price ${price}</li>;
    }
  }

  availabilityCheck(product) {
    const instock = <span className="badge badge-success">In Stock</span>;
    const backordered = (
      <span className="badge badge-warning">Back Ordered</span>
    );
    const discontinued = (
      <span className="badge badge-danger">Discontinued</span>
    );
    if (product.availability === 'instock') {
      return instock;
    } else if (product.availability === 'backordered') {
      return backordered;
    } else {
      return discontinued;
    }
  }

  productCount() {
    return this.state.products.length;
  }

  render() {
    const products = this.state.products;
    const onsale = products.filter(product => product.salePercentage > 0);
    const prodCount = products.length;
    console.log('in render ', prodCount);

    return (
      <Router>
        <Fragment>
          <Route render={() => <Nav prodCount={prodCount} />} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/products"
            render={() => (
              <Products
                products={products}
                destroyProduct={this.destroyProduct}
                saleCheck={this.saleCheck}
                availabilityCheck={this.availabilityCheck}
              />
            )}
          />
          <Route
            exact
            path="/sales"
            render={() => (
              <Sales
                onsale={onsale}
                destroyProduct={this.destroyProduct}
                saleCheck={this.saleCheck}
                availabilityCheck={this.availabilityCheck}
              />
            )}
          />
          <Route
            path="/create"
            render={({ history }) => (
              <Form refreshProducts={this.refreshProducts} history={history} />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
