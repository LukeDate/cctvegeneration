import React from 'react';
import '../styles/navigation.scss';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
    <nav className="nav-wrapper">
        <h1>CCTV Generation</h1>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
    </nav>
    )
}

export default Navigation;