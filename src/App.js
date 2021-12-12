import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import './Vendors/bootstrap.min.css';
import DetailsScreen from "./Components/DetailsScreen";
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';

import user from './Reducers/user'

const reducer = combineReducers({user})
const store = createStore(reducer)

function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomeScreen/>}></Route>
            <Route path="/details/:id" element={<DetailsScreen/>}></Route>
            <Route path="/login" element={<LoginScreen/>}></Route>
            <Route path="/register" element={<RegisterScreen/>}></Route>
          </Routes>
          </Provider>
        </BrowserRouter>
      </div>
  );
}

export default App;
