import style from "./MiddleComp.module.css";
import "aos/dist/aos.css";
import React from "react";

const MiddleLeft = ({ heading, Details, imageURL }) => {
  return (
    <div className={style.middle_main}>
      <div className={style.image}>
        <img className={style.preview} src={imageURL} alt="background" />
      </div>
      <div className={style.image_text}>
        <div>
          <h3>{heading}</h3>
          <p>{Details}</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleLeft;
