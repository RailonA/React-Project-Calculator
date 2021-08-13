import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    color: 'white',
    padding: '5px',
  };

  return (
    <nav>
      <h3 className="headerLogo">Math Magicians</h3>
      <ul className="nav-link">
        <Link style={navStyle} to="/home">
          <li className="linkText">Home</li>
        </Link>
        <Link style={navStyle} to="/calculator">
          <li className="linkText">Calculator</li>
        </Link>
        <Link style={navStyle} to="/quote">
          <li className="linkText">Quote</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
