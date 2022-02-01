import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import RoutesHairPrestige from './components/RoutesHairPrestige/RoutesHairPrestige';
import Footer from './components/Footer/Footer';
import Bandeau from './components/Bandeau/Bandeau';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Bandeau />
        <RoutesHairPrestige />
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;



