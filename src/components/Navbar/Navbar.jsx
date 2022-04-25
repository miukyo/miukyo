import React from "react";
import { Fade, Slide } from "react-reveal";
import Style from "./Style.module.scss";

const Navbar = () => {
  const [show, setShow] = React.useState({
    a: false,
    b: false,
  });
  return (
    <div className={Style.container}>
      <div
        onTransitionEnd={() => setShow({ ...show, b: !show.b })}
        className={`${Style.wrapperMobile} ${
          show.a ? Style.visible : Style.invisible
        }`}>
        <span
          className={`${Style.end} ${show.a ? Style.visible : Style.invisible}`}
        />
        <div className={Style.content}>
          <a onClick={() => setShow({ ...show, a: !show.a })} href='#About'>
            About
          </a>
          <a onClick={() => setShow({ ...show, a: !show.a })} href='#Works'>
            Works
          </a>
          <a onClick={() => setShow({ ...show, a: !show.a })} href='#Contact'>
            Contact
          </a>
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
            onClick={() => setShow({ ...show, a: !show.a })}>
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
            <a href='#About'>About</a>
            <a href='#Works'>Works</a>
          </div>
          <div className={Style.center}>
            <a href='#Home'>Miukyo</a>
          </div>
          <div className={Style.right}>
            <a href='#Contact'>Contact</a>
            {/* <p></p> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Navbar;
