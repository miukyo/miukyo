import React from "react";
import Style from "./Style.module.scss";

const Navbar = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.left}>
          <a data-aos='fade-up' data-aos-delay='150' href='#About'>
            About
          </a>
          <a data-aos='fade-up' data-aos-delay='100' href='#Works'>
            Works
          </a>
        </div>
        <div data-aos='fade-up' className={Style.center}>
          <a href='#Home'>Miukyo</a>
        </div>
        <div className={Style.right}>
          <a href='#Contact' data-aos='fade-up' data-aos-delay='100'>
            Contact
          </a>
          {/* <a data-aos='fade-up' data-aos-delay='150'>
            =
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
