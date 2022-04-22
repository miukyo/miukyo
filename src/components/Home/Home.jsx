import React from "react";
import Style from "./Style.module.scss";

const Home = () => {
  return (
    <>
      <div id='Home' className={Style.container}>
        <img className={Style.me} src='src/assets/Me.svg' />
        <div className={Style.wrapper}>
          <h1 data-aos='fade-up' data-aos-delay='150'>
            start where you are
          </h1>
          <h2 data-aos='fade-up' data-aos-delay='200'>
            use what you have
          </h2>
          <h2 data-aos='fade-up' data-aos-delay='250'>
            do what you can
          </h2>
        </div>
        <div className={Style.wrapperbg}>
          <h1 data-aos='fade-up' data-aos-delay='150'>
            start where you are
          </h1>
          <h2 data-aos='fade-up' data-aos-delay='200'>
            use what you have
          </h2>
          <h2 data-aos='fade-up' data-aos-delay='250'>
            do what you can
          </h2>
        </div>
        <div className={Style.foot}>
          <p>Home</p>
          <p>01</p>
        </div>
      </div>
    </>
  );
};

export default Home;
