import React from 'react';

class Products extends React.Component {
  render() {
    console.log('props via Products ', this.props);

    return (
      <div>
        <ul className="list-group">
          {this.props.products.map(product => {
            return (
              <li className="list-group-item" key={product.id}>
                <ul>
                  <li className="list-group-item ">
                    <div>{product.name}</div>
                    <div className="d-flex justify-content-end">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                        onClick={() => this.props.destroyProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                  {this.props.saleCheck(product)}
                  <div style={{ margin: '10px' }}>
                    {this.props.availabilityCheck(product)}
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
