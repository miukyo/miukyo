import React from "react";
import { Fade } from "react-reveal";
import Style from "./Style.module.scss";

const Home = () => {
  return (
    <>
      <div id='Home' className={Style.container}>
        <Fade bottom distance={"10rem"} duration={500}>
          <img alt='' className={Style.me} src='assets/Me.svg' />
        </Fade>
        <Fade bottom distance={"10rem"} cascade duration={400}>
          <div className={Style.wrapper}>
            <Fade bottom distance={"10rem"} cascade duration={400}>
              <h1>start where you are</h1>
              <h2>use what you have</h2>
              <h2>do what you can</h2>
            </Fade>
          </div>
        </Fade>
        <Fade bottom distance={"10rem"} cascade duration={400}>
          <div className={Style.wrapperbg}>
            <h1>start where you are</h1>
            <h2>use what you have</h2>
            <h2>do what you can</h2>
          </div>
        </Fade>
        <Fade bottom distance={"10rem"} duration={400}>
          <div className={Style.foot}>
            <p>Home</p>
            <p>01</p>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
