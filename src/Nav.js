import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
  const pathname = location.pathname;
  const links = ["/products", "/home", "/sales"];
  return (
    <ul classname="nav nav-pills">
      {links.map(link => (
        <li classname="nav-item" key={link}>
          <Link
            to={link}
            classname={`nav-link${link === pathname ? " active" : ""}`}
          >
            {link.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
