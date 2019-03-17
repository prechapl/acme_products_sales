import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
  const pathname = location.pathname;
  const links = ['/home', '/products', '/sales'];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navBar-brand" href="#">
        ACME
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {links.map(link => (
            <li className="nav-item" key={link}>
              <Link
                to={link}
                className={`nav-link${link === pathname ? ' active' : ''}`}
              >
                {link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
