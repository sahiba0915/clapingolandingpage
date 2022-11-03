import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import {Routes, Route } from "react-router-dom"
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
