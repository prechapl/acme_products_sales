import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    const pathname = location.pathname;
    const links = ['/home', '/products', '/sales', '/create'];

    console.log('via Nav ', this.props.prodCount);

    return (
      <nav className="nav">
        <a className="navBar-brand mb-0 h1">ACME</a>

        <ul className="nav">
          {links.map(link => (
            <li className="nav-item" key={link}>
              <Link
                to={link}
                className={`nav-link${link === pathname ? ' active' : ''}`}
              >
                {link === '/products' ? (
                  <span className="badge badge-pill badge-light">
                    {' '}
                    {this.props.prodCount}{' '}
                  </span>
                ) : (
                  ''
                )}
                {link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
