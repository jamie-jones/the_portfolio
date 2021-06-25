import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import "./styles/Mobile.css";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";

const App =() => {
  return (
    <Router>
      <div id="main">
        <Banner />
        <About />
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;
