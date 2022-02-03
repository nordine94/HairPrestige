import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RoutesHairPrestige from "./components/RoutesHairPrestige/RoutesHairPrestige";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RoutesHairPrestige />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
