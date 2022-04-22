import React from "react";
import Style from "./Style.module.scss";

const About = () => {
  return (
    <div data-aos='fade-up' id='About' className={Style.container}>
      <div className={Style.wrapper}>
        <h1>about me?</h1>
        <p data-aos='fade-up' data-aos-delay='100'>
          a person who likes to{" "}
          <span
            data-aos='fade-up'
            data-aos-delay='200'
            className={Style.stroke}>
            design
          </span>{" "}
          and
          <span
            data-aos='fade-up'
            data-aos-delay='200'
            className={Style.stroke}>
            {" "}
            code.
          </span>{" "}
          also a tech enthusiast. and i want to learn
          <span
            data-aos='fade-up'
            data-aos-delay='200'
            className={Style.stroke}>
            {" "}
            something new
          </span>{" "}
          related to technology as its not{" "}
          <span
            data-aos='fade-up'
            data-aos-delay='200'
            className={Style.stroke}>
            {" "}
            too hard.
          </span>
        </p>
      </div>
      <div className={Style.foot}>
        <p>About</p>
        <p>02</p>
      </div>
    </div>
  );
};

export default About;
