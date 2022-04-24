import React from "react";
import { Fade } from "react-reveal";
import Style from "./Style.module.scss";

const Home = () => {
  
  return (
    <>
      <div id='Home' className={Style.container}>
        <Fade bottom distance={"10rem"} duration={500}>
          <img className={Style.me} src='assets/Me.svg' />
        </Fade>
        <Fade bottom distance={"10rem"} cascade duration={400}>
          <div className={Style.wrapper}>
            <h1>{Local.header1}</h1>
            <h2>{Local.header2}</h2>
            <h2>{Local.header3}</h2>
          </div>
        </Fade>
        <Fade bottom distance={"10rem"} cascade duration={400}>
          <div className={Style.wrapperbg}>
            <h1>{Local.header1}</h1>
            <h2>{Local.header2}</h2>
            <h2>{Local.header3}</h2>
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
