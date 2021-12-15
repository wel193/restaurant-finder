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
import ProfileScreen from "./Components/ProfileScreen";

import reviews from "./Reducers/reviews";
import user from './Reducers/user'
import LogoutComponent from './Components/LogoutComponent';
import profile from './Reducers/profile'

const reducer = combineReducers({reviews, user, profile});
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
                        <Route path="/profile" element={<ProfileScreen/>}></Route>
                        <Route path="/logout" element={<LogoutComponent/>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
  );
}

export default App;
