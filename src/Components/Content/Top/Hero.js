import style from "./Hero.module.css";
import background from "../../../image/background.jpg";
import Input from "./Input";
import Model from "./Overlay/Model";
import React from "react";
import useHandleAPI from "../../../Hooks/useHandleAPI";
import { getTracking } from "../../../API/API";

const Hero = () => {
  const [view, setView] = React.useState(false);
  const { loading, sendReq, status, data } = useHandleAPI();

  const showModel = (e) => {
    e.preventDefault();
    setView(true);
  };
  const closeModel = (e) => {
    e.preventDefault();
    setView(false);
  };
  const submitHandler = (trackingNumber) => {
    sendReq(getTracking, trackingNumber);
    setView(true);
  };

  React.useEffect(() => {
    document.title = "Fastron Delivey - World Fastest Delivery "
  },[])

  return (
    <div className={`animate__animated animate__fadeIn  ${style.hero_main}`}>
      <img
        className={style.background}
        src={background}
        alt="backgrund"
      />
      <div className={style.section}></div>
      {/* <Flip left> */}
      <div className={style.text}>
        <Input
          sendData={submitHandler}
          loading={loading}
          showModel={showModel}
        />

        {!loading && status && view && (
          <Model
            data={data}
            closeOverlay={closeModel}
            backdropClick={closeModel}
          />
        )}
        <small className={style.demo}>
          Demo:
          <p>11657591IN (Delivered)</p>
          <p>11657598IN (Transit)</p>
          <p>11657680IN (Pickup)</p>
        </small>
      </div>
      {/* </Flip> */}
    </div>
  );
};

export default Hero;
