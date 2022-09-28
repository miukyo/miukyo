import React from "react";
import Style from "./Style.module.scss";
import Items from "../Items.json";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";

const Works = () => {
  return (
    <div id='Works' className={Style.container}>
      <div className={Style.wrapper}>
        <Fade bottom distance={"10rem"} duration={400}>
          <div className={Style.top}>
            <h1>SELECTED WORKS</h1>
            {/* <a href='#'>VIEW ALL WORKS &gt;</a> */}
            <p></p>
          </div>
        </Fade>
      </div>
      <Fade bottom distance={"10rem"} duration={400}>
        <div className={Style.wrapperP}>
          <span className={Style.shadow} />
          <div className={Style.list}>
            {Items.map((item, i) => (
              <>
                {item.status === "active" ? (
                  <Link
                    to={`/p/${item.slug}`}
                    key={i}
                    className={Style.listContent}>
                    <div className={Style.title}>
                      <p>0{item.id}</p>
                      <h1>{item.name}</h1>
                    </div>
                    <div className={Style.desc}>
                      <p>Desc</p>
                      <h1>{item.shortdesc}</h1>
                    </div>
                    <div className={Style.img}>
                      <img alt='' className={Style.innerimg} src={item.img} />
                    </div>
                  </Link>
                ) : (
                  <div key={i} className={Style.listContent}>
                    <div className={Style.coming}>
                      <h1>Coming Soon</h1>
                    </div>
                  </div>
                )}
              </>
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
