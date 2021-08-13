import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-link">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link style={navStyle} to="/quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
