import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import DetailsScreen from "../Components/DetailsScreen";
import {useSelector} from 'react-redux';

const selectUser = (state) => state.user;

const Navigation = ({active}) => {
    const user = useSelector(selectUser);
    console.log(user)
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
                            <Link to="/details/1"
                                  className={`nav-link ${active === 'find' ? 'active' : ''}`}>
                                    Find Restaurants
                            </Link>
                        </li>
                        {
                            user &&
                            <li className="nav-item">
                                <Link to="/logout"
                                      className={`nav-link ${active === 'login' ? 'active' : ''}`}>
                                    Logout
                                </Link>
                            </li>
                        }
                        {
                            !user &&
                            <li className="nav-item">
                                <Link to="/login"
                                  className={`nav-link ${active === 'login' ? 'active' : ''}`}>
                                    Login
                                </Link>
                            </li>}
                        {!user &&
                            <li className="nav-item">
                            <Link to="/register"
                            className={`nav-link ${active === 'Register' ? 'active' : ''}`}>
                            Register
                            </Link>
                            </li>
                        }
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


