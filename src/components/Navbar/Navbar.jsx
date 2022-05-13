import React from "react";
import { Fade, Slide } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import Style from "./Style.module.scss";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className={Style.container}>
      <div
        className={`${Style.wrapperMobile} ${
          show ? Style.visible : Style.invisible
        }`}>
        <span
          className={`${Style.end} ${show ? Style.visible : Style.invisible}`}
        />
        <div className={Style.content}>
          <Link onClick={() => setShow(!show)} to='/#About'>
            About
          </Link>
          <Link onClick={() => setShow(!show)} to='/#Works'>
            Works
          </Link>
          <Link onClick={() => setShow(!show)} to='/#Contact'>
            Contact
          </Link>
        </div>
        <div className={Style.contentB}>
          <p>About</p>
          <p>Works</p>
          <p>Contact</p>
        </div>
      </div>
      <Fade bottom distance={"5rem"} duration={400}>
        <div className={Style.wrapper}>
          <button
            aria-label='Menu'
            className={Style.mobilebtn}
            onClick={() => setShow(!show)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              viewBox='0 0 16 16'>
              <path d='M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z' />
            </svg>
          </button>
          <div className={Style.left}>
            <Link to='/#About'>About</Link>
            <Link to='/#Works'>Works</Link>
          </div>
          <div className={Style.center}>
            <Link onClick={() => setShow(false)} to='/#Home'>
              Miukyo
            </Link>
          </div>
          <div className={Style.right}>
            <Link to='/#Contact'>Contact</Link>
            {/* <p></p> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Navbar;
