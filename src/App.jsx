import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import Navbar from "./components/Navbar/Navbar";
import { Fade, Slide } from "react-reveal";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <div className='App'>
      {!show && (
        <Fade>
          <div className='Loader'>
            <p>Miukyo</p>
            <p className='m'>Miukyo</p>
            <div className='w'>
              <Slide left>
                <hr onAnimationEnd={() => setShow(true)} />
              </Slide>
            </div>
          </div>
        </Fade>
      )}

      {show && (
        <>
          <Navbar />
          <div className='Container'>
            <Home />
            <About />
            <Works />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
