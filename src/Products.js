import React from 'react';

class Products extends React.Component {
  render() {
    // const products = this.props.products;
    return (
      <div>
        <ul>
          {this.props.products.map(product => {
            return (
              <li key={product.id}>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.availabilty}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
