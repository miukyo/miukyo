import React from "react";
import Items from "../Items.json";
import Style from "./Style.module.scss";
import Desc from "./Data";
import { HashLink as Link } from "react-router-hash-link";

const Details = (props) => {
  const [Data, setData] = React.useState({});
  React.useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const data = Items.find((item) => item.slug.toString() === id);
    setData(data);
  }, []);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);
  return (
    <>
      <img className={Style.banner} src={Data.banner} />
      <div className={Style.container}>
        <Link to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            className={Style.back}
            viewBox='0 0 16 16'>
            <path
              fill-rule='evenodd'
              d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
            />
          </svg>
        </Link>
        <div className={Style.wrapper}>
          <h1>Description</h1>
          <Desc name={Data.name} />
        </div>
        <div className={Style.side}>
          <div className={Style.info}>
            <h1>{Data.name}</h1>
            <p>{Data.shortdesc}</p>
          </div>
          <a
            href={Data.link}
            className={`${Style.btn} ${Data.link === "" && Style.denied}`}>
            Visit website
          </a>
          <a
            href={Data.sourcelink}
            className={`${Style.btn} ${
              Data.sourcelink === "" && Style.denied
            }`}>
            Source code
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
