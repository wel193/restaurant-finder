import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Vendors/bootstrap.min.css';
import DetailsScreen from "./Components/DetailsScreen";
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen'


function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="/details/:id" element={<DetailsScreen/>}></Route>
              <Route path="/login" element={<LoginScreen/>}></Route>
              <Route path="/register" element={<RegisterScreen/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
