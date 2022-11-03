import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Offer from './Components/Offer';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <Hero />
      <Stats/>
      <Offer />
      <Work/>
    </div>
  );
}

export default App;
