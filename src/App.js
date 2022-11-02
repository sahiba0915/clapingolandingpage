import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
    </div>
  );
}

export default App;
