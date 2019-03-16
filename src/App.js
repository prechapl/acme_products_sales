import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Products from './Products';
import Home from './Home';
// import Nav from './Nav';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get('/products')
      .then(res => res.data)
      .then(products => this.setState({ products }))
      .catch();
  }

  render() {
    const products = this.state.products;
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route
            path="/products"
            render={() => <Products products={products} />}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
