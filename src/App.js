import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import{
  BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Router>
        <Routes>
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
