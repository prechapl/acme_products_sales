import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import Nav from "./Nav";
import Sales from "./Sales";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("/products")
      .then(res => res.data)
      .then(products => this.setState({ products }))
      .catch();
  }

  render() {
    const products = this.state.products;
    const onsale = products.filter(product => product.salePercentage > 0);

    return (
      <Router>
        <Fragment>
          <Route component={Nav} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/products"
            render={() => <Products products={products} />}
          />
          <Route exact path="/sales" render={() => <Sales onsale={onsale} />} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
