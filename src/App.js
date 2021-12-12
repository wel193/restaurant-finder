import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Vendors/bootstrap.min.css';
import './Components/rf.css';
import DetailsScreen from "./Components/DetailsScreen";
import HomeScreen from "./Components/HomeScreen";
import {combineReducers, createStore} from "redux";
import reviews from './Reducers/reviews';
import {Provider} from "react-redux";
import FindScreen from "./Components/FindScreen";

const reducer = combineReducers({reviews});
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
          <div className="container">
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<HomeScreen/>}></Route>
                      <Route path="/details/:id" element={<DetailsScreen/>}></Route>
                      <Route path="/find" element={<FindScreen/>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
  );
}

export default App;
