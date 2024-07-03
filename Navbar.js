import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">BikeRiderApp</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/user">User Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin Page</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={onLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
