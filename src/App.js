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
import Result from './Components/Result';
import UsedDevice from './Components/UsedDevice';
import AdminDashboard from './AdminSite/AdminDashboard';
import PhoneResult from './Result/Result';
import UserTable from './AdminSite/UserData';
import ImageList from './AdminSite/ImageData';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        {/* <Route exact path='/' element={< PhoneResult/>}></Route> */}
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/category' element={<Category />}></Route>
          <Route exact path='/selectImage' element={<SelectImage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}>
          </Route>
          <Route exact path="/alogin" element={<ALogin />}></Route>
        <Route exact path="/result" element={<Result/>}></Route>
        <Route exact path="/useddevice" element={<UsedDevice/>}></Route>
        <Route exact path="/admind" element={<AdminDashboard/>}></Route>
        <Route exact path="/userdetails" element={<UserTable/>}></Route>
        <Route exact path="/imagedetails" element={<ImageList/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
