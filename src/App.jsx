import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import Lang from "./components/Lang.json";
import LocalizedStrings from "react-localization";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const Local = new LocalizedStrings(Lang);
  return (
    <div className='App'>
      {/* <div className='Mobile'>
        <p>responsive design is not supported yet</p>
      </div> */}
      <Navbar Local={Local} />
      <div className='Container'>
        <Home Local={Local} />
        <About Local={Local} />
        <Works Local={Local} />
        <Contact Local={Local} />
      </div>
    </div>
  );
}

export default App;
