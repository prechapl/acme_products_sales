import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Products from './Products';
// import Nav from './Nav';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('/products').then(res => {
      const prods = res.data;
      this.setState({ prods });
    });
  }

  render() {
    const products = this.state.products;
    return (
      <Router>
        <div>
          <h3>Acme Product Sales</h3>
          <Route
            path="/products"
            render={() => <Products products={products} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
