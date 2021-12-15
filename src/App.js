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
import user from './Reducers/user';
import restaurants from './Reducers/restaurants'
import LogoutComponent from './Components/LogoutComponent';
import profile from './Reducers/profile'
import Privacy from "./Components/Privacy";
import PostRestaurantScreen from './Components/PostRestaurantsScreen';
import DetailsLocalScreen from './Components/DetailsScreen/LocalDetailScreen';

const reducer = combineReducers({reviews, user, profile, restaurants});
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
                        <Route path="/details/local/:id" element={<DetailsLocalScreen/>}></Route>
                        <Route path="/login" element={<LoginScreen/>}></Route>
                        <Route path="/register" element={<RegisterScreen/>}></Route>
                        <Route path="/profile" element={<ProfileScreen/>}></Route>
                        <Route path="/logout" element={<LogoutComponent/>}></Route>
                      <Route path="/privacy" element={<Privacy/>}></Route>
                    <Route path="/post" element={<PostRestaurantScreen/>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
  );
}

export default App;
