import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import './Vendors/bootstrap.min.css';
import './Components/rf.css';

import DetailsScreen from "./Components/DetailsScreen";
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';
import FindScreen from "./Components/FindScreen";

import reviews from "./Reducers/reviews";
import user from './Reducers/user'

const reducer = combineReducers({reviews, user});
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
          <div className="container">
              <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<HomeScreen/>}></Route>
                        <Route path="/find" element={<FindScreen/>}></Route>
                        <Route path="/details/:id" element={<DetailsScreen/>}></Route>
                        <Route path="/login" element={<LoginScreen/>}></Route>
                        <Route path="/register" element={<RegisterScreen/>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
  );
}

export default App;
