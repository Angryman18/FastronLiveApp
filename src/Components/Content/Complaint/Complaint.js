import style from "./Complaint.module.css";
import complaint from "../../../image/complaint.jpg";
import ComplaintForm from "./ComplainForm";
import ComplaintTop from "./ComplaintTop";
import React from 'react'


const Complaint = () => {
  // const { loading, sendReq, status } = useComplaint();
  React.useEffect(() => {
    document.title = "Complaint Box - Fastron Delivery"
 }, []);
  return (
    <div className={style.complaint_main}>
      <ComplaintTop />
      <div className={style.form_content}>
        <div className={style.image}>
          <img src={complaint} alt="" />
        </div>
        <ComplaintForm />
      </div>
    </div>
  );
};

export default Complaint;
