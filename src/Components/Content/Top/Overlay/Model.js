import React from "react";
import style from "./Model.module.css";
import ReactDOM from "react-dom";
import DispatchVisual from "./DispatchVisual";

const Model = ({ closeOverlay, data }) => {
  const Backdrop = () => {
    return (
      <div
        className={style.backdrop}
      ></div>
    );
  };
  const Overlay = () => {
    return (
      <div className={style.overlay}>
        <div className={style.overlay_content}>
          {data.data && <DispatchVisual transitData={data} />}
          {data.error && <div className={style.error}>{data.error}</div>}
          <span id={style.close}>
            <i
              onClick={closeOverlay}
              className="fas fa-times-circle"
            ></i>
          </span>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <Overlay closeOverlay={closeOverlay} />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Model;
