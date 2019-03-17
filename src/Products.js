import React from 'react';

class Products extends React.Component {
  render() {
    function saleCheck(product) {
      const salePrice = product.price - product.price * product.salePercentage;
      if (product.salePercentage > 0) {
        return (
          <li className="list-group-item">
            <p>
              <s>Price ${product.price}</s>
            </p>
            <div>Sale Price ${salePrice}</div>
          </li>
        );
      } else {
        return <li className="list-group-item">Price ${product.price}</li>;
      }
    }

    console.log(this.props);

    return (
      <div>
        <ul className="list-group">
          {this.props.products.map(product => {
            return (
              <li className="list-group-item" key={product.id}>
                <ul>
                  <li className="list-group-item">
                    {product.name}
                    <button
                      type="button"
                      onClick={() => this.props.destroyProduct(product.id)}
                    >
                      Delete
                    </button>
                  </li>
                  {saleCheck(product)}
                  <div className="col">
                    <div
                      style={{ margin: '10px' }}
                      className="badge badge-secondary"
                    >
                      {product.availabilty}
                    </div>
                  </div>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
