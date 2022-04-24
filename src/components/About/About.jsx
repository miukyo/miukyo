import React from "react";
import { Fade } from "react-reveal";
import Style from "./Style.module.scss";

const About = () => {
  return (
    <div data-aos='fade-up' id='About' className={Style.container}>
      <Fade bottom distance={"10rem"} cascade duration={400}>
        <div className={Style.wrapper}>
          <h1>about me?</h1>
          <p>
            a person who likes to
            <Fade delay={100}>
              <span className={Style.stroke}> design </span>
            </Fade>
            and
            <Fade delay={150}>
              <span className={Style.stroke}> code. </span>
            </Fade>
            also a tech enthusiast. and i want to learn
            <Fade delay={200}>
              <span className={Style.stroke}> something new </span>
            </Fade>
            related to technology as its not
            <Fade delay={250}>
              <span className={Style.stroke}> too hard. </span>
            </Fade>
          </p>
        </div>
      </Fade>
      <Fade bottom distance={"10rem"} duration={400}>
        <div className={Style.foot}>
          <p>About</p>
          <p>02</p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
