import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../Services/userService';

const selectUser = (state) => state.user;
const Navigation = ({active}) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(()=>getUser(dispatch), [dispatch])

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
                        {
                            user &&
                            <li className="nav-item">
                                <Link to="/logout"
                                      className={`nav-link`}>
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
                            <Link to="/privacy"
                                  className={`nav-link ${active === 'privacy' ? 'active' : ''}`}>
                                Privacy Policy
                            </Link>
                        </li>

                        {user &&
                        <li className="nav-item">
                            <Link to="/profile"
                                  className={`nav-link ${active === 'profile' ? 'active' : ''}`}>
                                <i className="fas fa-user"></i>
                            </Link>
                        </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;


