import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      // fields: ['name', 'price', 'discount'],
      name: '',
      price: '0.00',
      salePercentage: '0.00',
      availability: 'instock'
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
    // const availability = this.state.availability;

    // console.log('state ', this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input
              className="form-control form-control-sm"
              name="name"
              onChange={this.handleChange}
              value={name}
              placeholder="enter product"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price"> Price: </label>
            <input
              className="form-control form-control-sm"
              name="price"
              onChange={this.handleChange}
              value={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="salePercentage"> Discount Percentage: </label>
            <input
              className="form-control form-control-sm"
              name="salePercentage"
              onChange={this.handleChange}
              value={salePercentage}
            />
          </div>
          <div className="form-group">
            <select
              className="dropdown"
              name="availability"
              onChange={this.handleChange}
            >
              <option value="instock">instock</option>
              <option value="backordered">backordered</option>
              <option value="discontinued">discontinued</option>
            </select>
          </div>

          <button type="submit" onChange={this.handleChange}>
            Create Product
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
