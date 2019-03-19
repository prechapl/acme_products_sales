import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      // fields: ['name', 'price', 'discount'],
      name: '',
      price: '0.00',
      salePercentage: '0.00',
      availability: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log('props ', this.props);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { name, price, salePercentage, availability } = this.state;
    // console.log(salePercentage);
    axios
      .post('/products', { name, price, salePercentage, availability })
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(e => console.log(e));
  }

  handleChange({ target }) {
    console.log('target ', target);
    this.setState({ [target.name]: target.value });
  }

  render() {
    const name = this.state.name;
    const price = this.state.price;
    const salePercentage = this.state.salePercentage;
    const availability = this.state.availability;

    console.log('state ', this.state);

    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <label htmlFor="name"> Name: </label>
          <input name="name" onChange={this.handleChange} value={name} />
          <label htmlFor="price"> Price: </label>
          <input name="price" onChange={this.handleChange} value={price} />
          <label htmlFor="salePercentage"> Discount Percentage: </label>
          <input
            name="salePercentage"
            onChange={this.handleChange}
            value={salePercentage}
          />

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Availability
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                instock
              </a>
              <a className="dropdown-item" href="#">
                backordered
              </a>
              <a className="dropdown-item" href="#">
                discontinued
              </a>
            </div>
          </div>
          <button type="submit">Create Product</button>
        </form>
      </div>
    );
  }
}

export default Form;
