import React from "react";
import { Fade } from "react-reveal";
import Style from "./Style.module.scss";

const Navbar = () => {
  return (
    <div className={Style.container}>
      <Fade bottom distance={"5rem"} duration={400}>
        <div className={Style.wrapper}>
          <div className={Style.left}>
            <a href='#About'>About</a>
            <a href='#Works'>Works</a>
          </div>

          <div className={Style.center}>
            <a href='#Home'>Miukyo</a>
          </div>
          <div className={Style.right}>
            <a href='#Contact'>Contact</a>
            {/* <a '150'>
            =
          </a> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Navbar;
