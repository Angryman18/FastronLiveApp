import style from "./Complaint.module.css";
import React from "react";

const ComplaintTop = () => {
  return (
    <div className={style.topSection}>
      <div>
        <h2>We are Here to Assist You</h2>
        <hr />
      </div>
      <div>
        <p>
          Due to Covid you might face a delay in response but we are sorry for
          this convenicence. Thanks for your patience. we will replay back shortly.
        </p>
      </div>
    </div>
  );
};

export default ComplaintTop;
