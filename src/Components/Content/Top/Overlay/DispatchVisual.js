import React from "react";
import style from "./DispatchVisual.module.css";

const DispatchVisual = ({ transitData }) => {
  const { data } = transitData;

  const Single = (status) => {
    const { config } = status;
    const fill = {
      color: "#266A2E",
      opacity: "1",
    };

    const inactive = {
      opacity: "0.2",
    };

    const roadFill = {
      backgroundColor: "#266A2E",
      opacity: "1"
    }

    return (
      <>
        <span id={style.source}>
          <i style={fill} className="fas fa-people-carry"></i>
        </span>
        <div
          style={
            config.transitStatus || config.deliveriedStatus ? roadFill : inactive
          }
          id={style.road}
        ></div>
        <span id={style.transit}>
          <i
            style={
              config.transitStatus || config.deliveriedStatus ? fill : inactive
            }
            className="fas fa-truck"
          ></i>
        </span>
        <div
          style={config.deliveriedStatus ? roadFill : inactive}
          id={style.road}
        ></div>
        <span id={style.delivery}>
          <i
            style={config.deliveriedStatus ? fill : inactive}
            className="fas fa-check-square"
          ></i>
        </span>
      </>
    );
  };

  // const pickup = (
  //   <>
  //     <div id={style.road}></div>
  //     <span id={style.source}>
  //       <i style={{ color: "#212121" }} className="fas fa-people-carry"></i>
  //     </span>
  //     <div id={style.road}></div>
  //   </>
  // );

  // const transit = (
  //   <>
  //     <div id={style.road} style={{ backgroundColor: "orange" }}></div>
  //     <span id={style.transit}>
  //       <i style={{ color: "orange" }} className="fas fa-truck"></i>
  //     </span>
  //     <div id={style.road} style={{ backgroundColor: "orange" }}></div>
  //   </>
  // );

  // const deliveried = (
  //   <>
  //     <div id={style.road} style={{ backgroundColor: "green" }}></div>
  //     <span id={style.delivery}>
  //       <i style={{ color: "green" }} className="fas fa-check-square"></i>
  //     </span>
  //     <div id={style.road} style={{ backgroundColor: "green" }}></div>
  //   </>
  // );

  const pickup_heading = (
    <div className={style.heading} style={{ color: "#212121" }}>
      {data.status}
    </div>
  );

  const transit_heading = (
    <div className={style.heading} style={{ color: "orange" }}>
      {data.status}
    </div>
  );

  const delivered_heading = (
    <div className={style.heading} style={{ color: "green" }}>
      {data.status}
    </div>
  );

  const pickedupStatus = data.status === "Picked Up";
  const transitStatus = data.status === "In-Transit";
  const deliveriedStatus = data.status === "Delivered";

  return (
    <React.Fragment>
      {transitStatus && transit_heading}
      {deliveriedStatus && delivered_heading}
      {pickedupStatus && pickup_heading}
      <div className={style.location}>
        <small>Picked Up from {data.dispatched_from}</small>
        <small>Pickup Date: {data.dispatched}</small>
      </div>
      <div className={style.visual_main}>
        <div className={style.visual_content}>
          <Single
            config={{ pickedupStatus, transitStatus, deliveriedStatus }}
          />
        </div>
      </div>
      <div className={style.location}>
        <small>Destination: {data.destination}</small>
        <small>Estimated Delivery: {data.est_del}</small>
      </div>
      <div className={style.checkpoint}>
        <h3>
          Status:{" "}
          {data.status !== "Delivered"
            ? `${data.current_location} on ${data.current_location_date}`
            : `Delivered on ${data.delivery}`}
        </h3>
      </div>
    </React.Fragment>
  );
};

export default DispatchVisual;
