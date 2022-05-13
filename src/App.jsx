import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import Navbar from "./components/Navbar/Navbar";
import { Fade, Slide } from "react-reveal";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details";

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
          <Routes>
            <Route
              path='/'
              element={
                <div className='Container'>
                  <Home />
                  <About />
                  <Works />
                  <Contact />
                </div>
              }></Route>
            <Route path='/p/:id' element={<Details />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
