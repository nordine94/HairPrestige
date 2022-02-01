import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Content />
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


