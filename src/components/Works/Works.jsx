import React from "react";
import Style from "./Style.module.scss";
import Items from "./Items.json";
import { Fade } from "react-reveal";

const Works = () => {
  return (
    <div id='Works' className={Style.container}>
      <div className={Style.wrapper}>
        <Fade bottom distance={"10rem"} duration={400}>
          <div className={Style.top}>
            <h1>SELECTED WORKS</h1>
            <a href='#'>VIEW ALL WORKS &gt;</a>
          </div>
        </Fade>
      </div>
      <Fade bottom distance={"10rem"} duration={400}>
        <div className={Style.wrapperP}>
          <span className={Style.shadow} />
          <div className={Style.list}>
            {Items.map((item, i) => (
              <div key={i} className={Style.listContent}>
                {item.status === "active" ? (
                  <>
                    <div className={Style.title}>
                      <p>0{item.id}</p>
                      <h1>{item.name}</h1>
                    </div>
                    <div className={Style.desc}>
                      <p>Desc</p>
                      <h1>{item.shortdesc}</h1>
                    </div>
                    <div className={Style.img}>
                      <img className={Style.innerimg} src={item.img} />
                    </div>
                  </>
                ) : (
                  <div className={Style.coming}>
                    <h1>Coming Soon</h1>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Fade>
      <Fade bottom distance={"10rem"} duration={400}>
        <div className={Style.foot}>
          <p>Works</p>
          <p>03</p>
        </div>
      </Fade>
    </div>
  );
};

export default Works;
