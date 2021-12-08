//import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';

import './App.css';
import './vendors/fontawesome/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';

import LoginScreen from './views/Login';
import RegisterScreen from './views/Register'


function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path={["/", "/login"]} exact={true}>
            <LoginScreen/>
          </Route>
          <Route path="/register" exact={true}>
            <RegisterScreen/>
          </Route>

        </div>
      </BrowserRouter>
  );
}

export default App;
