import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className='App'>
      {/* <div className='Mobile'>
        <p>responsive design is not supported yet</p>
      </div> */}
      <div className='Container'>
        <Home />
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
