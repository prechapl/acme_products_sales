import React from "react";

class Sales extends React.Component {
  render() {
    return (
      <div>
        <h3>Sales!</h3>
        <ul>
          {this.props.onsale.map(product => {
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

export default Sales;
