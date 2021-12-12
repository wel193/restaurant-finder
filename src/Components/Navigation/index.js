import React from 'react';
import {Link} from "react-router-dom";
import DetailsScreen from "../DetailsScreen";

const Navigation = ({active}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link
                    to="/"
                    className="navbar-brand ms-1">
                        Restaurant Finder
                </Link>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/"
                                  className={`nav-link ${active === 'home' ? 'active' : ''}`}>
                                    Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"
                                  className={`nav-link ${active === 'about' ? 'active' : ''}`}>
                                    About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/find"
                                  className={`nav-link ${active === 'find' ? 'active' : ''}`}>
                                    Find Restaurants
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"
                                  className={`nav-link ${active === 'login' ? 'active' : ''}`}>
                                    Login / Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"
                                  className={`nav-link ${active === 'privacy' ? 'active' : ''}`}>
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;


