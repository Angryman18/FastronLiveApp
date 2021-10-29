import style from "./Input.module.css";
import LoadingSpinner from "../../UI/Loading";
import React, { useState } from "react";
import 'animate.css'

const Input = ({ loading, sendData }) => {
  const [TrackData, setTrackData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    sendData(TrackData);
  };

  return (
    <form onSubmit={submitHandler} className={`animate__animated animate__bounceIn ${style.form}`}>
      <div className={style.inputSection}>
        <input
          onChange={(e) => setTrackData(e.target.value)}
          type="text"
          placeholder="Enter Tracking Number"
        />
      </div>
      <div className={style.buttonSection}>
        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              <LoadingSpinner />
              <span style={{ marginLeft: "5px" }}>Track</span>
            </>
          ) : (
            "Track"
          )}
        </button>
      </div>
    </form>
  );
};

export default Input;
