import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Category from './Components/Category';
import SelectImage from './Components/SelectImage';
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup"
import ALogin from './AdminSite/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/category' element={<Category />}></Route>
          <Route exact path='/selectImage' element={<SelectImage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}>
          </Route>
          <Route exact path="/alogin" element={<ALogin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
