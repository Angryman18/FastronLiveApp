import React from "react";
import style from "./BacktoTop.module.css";
import { useWindowScroll } from "react-use";

const BacktoTop = () => {
  const { y: pageYoffset } = useWindowScroll();

  if (pageYoffset < 100) {
    return false;
  }

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={style.button}
    >
      <i className="fas fa-angle-up"></i>
    </div>
  );
};

export default BacktoTop;
