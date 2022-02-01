import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bandeau from './components/Bandeau/Bandeau';
import Home from './pages/Home/Home';
import Conseils from './pages/Conseils/Conseils';
import AccueilServices from './components/AccueilServices/AccueilServices';

import './App.css';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/conseils" element={<Conseils/>}/>
        </Routes>
      </Router>
      <Bandeau/>
       <AccueilServices />
      <h1>coucou</h1>
    </div>
  );
}

export default App;


