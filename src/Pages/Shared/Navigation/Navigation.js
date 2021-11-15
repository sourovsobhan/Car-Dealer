import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#">
          Dealer<span className="text-warning">Car</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item menu-link">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item menu-link">
              <Link to="/feauture">Feautures</Link>
            </li>
            <li className="nav-item menu-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item menu-link">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item menu-link">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item menu-link">
              <Link to="/review">Reviews</Link>
            </li>
            {user?.email ? (
              <div>
                <button
                  type="button"
                  className="btn btn-light mt-3"
                  onClick={logOut}
                >
                  LogOut
                </button>
                <p>{user.displayName}</p>
                <li className="nav-item menu-link">
                  <Link to="/dashboard">DashBoard</Link>
                </li>
              </div>
            ) : (
              <li className="nav-item menu-link">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
