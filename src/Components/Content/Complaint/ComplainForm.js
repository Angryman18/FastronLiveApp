import INPUT from "../../UI/input";
import Button from "../../UI/Button";
import style from "./Complaint.module.css";
import React from "react";
import { useRef } from "react";
import Popup from "../../UI/Popup";
import LoadingSpinner from "../../UI/Loading";
import useHandleAPI from "../../../Hooks/useHandleAPI";
import { ComplaintPOST } from "../../../API/API";

const initialState = {
  fullname: {
    value: "",
    touch: false,
    valid: false,
  },
  subject: {
    value: "",
    touch: false,
    valid: false,
  },
  email: {
    value: "",
    touch: false,
    valid: false,
  },
  message: {
    value: "",
    touch: false,
    valid: false,
  },
};

const reset = {...initialState}


const ComplaintForm = () => {
  const [state, setState] = React.useState(initialState);


  const { loading, status, sendReq } = useHandleAPI();

  const fullname = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const fullname_touch = state.fullname.touch;
    const email_touch = state.email.touch;
    const subject_touch = state.subject.touch;
    const message_touch = state.message.touch;

    if (!fullname_touch) {
      fullname.current.className = style.form_error;
    }
    if (!subject_touch) {
      subject.current.className = style.form_error;
    }
    if (!email_touch) {
      email.current.className = style.form_error;
    }
    if (!message_touch) {
      message.current.className = style.textarea_error;
    }
    if (!fullname_touch || !email_touch || !subject_touch || !message_touch) {
      return;
    }
    if (
      state.fullname.valid &&
      state.email.valid &&
      state.subject.valid &&
      state.message.valid
    ) {
      const obj = {
        fullname: state.fullname.value,
        email: state.email.value,
        subject: state.subject.value,
        message: state.message.value,
      };
      sendReq(ComplaintPOST, obj);
      setState(reset)
    } else {
      return;
    }
  };


  const fullname_invalid =
    state.fullname.touch && state.fullname.value.length < 4;
  const email_invalid =
    state.email.touch &&
    //eslint-disable-next-line
    !state.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
  const subject_invalid =
    state.subject.touch && state.subject.value.length < 10;
  const message_invalid =
    state.message.touch && state.message.value.length < 30;

  return (
    <form onSubmit={submitHandler} className={style.complaint_form}>
      {status && !loading && (
        <Popup
          width="auto"
          bgcolor="green"
          text="We have Received Your Request!"
        />
      )}
      <div>
        <label htmlFor="name">Full Name:</label>
        <INPUT
          onChange={(e) =>
            setState((preState) => {
              return {
                ...preState,
                fullname: {
                  value: e.target.value,
                  touch: true,
                  valid: e.target.value.length >= 4,
                },
              };
            })
          }
          onBlur={(e) =>
            setState((preState) => {
              return {
                ...preState,
                fullname: { ...preState.fullname, touch: true },
              };
            })
          }
          ref={fullname}
          value={state.fullname.value}
          id="name"
          className={fullname_invalid ? style.form_error : style.form_input}
          placeholder="Enter Your Name"
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <INPUT
          onChange={(e) => {
            setState((preState) => {
              return {
                ...preState,
                subject: {
                  value: e.target.value,
                  touch: true,
                  valid: e.target.value.length >= 10,
                },
              };
            });
          }}
          onBlur={(e) =>
            setState((preState) => {
              return {
                ...preState,
                subject: { ...preState.subject, touch: true },
              };
            })
          }
          id="subject"
          value={state.subject.value}
          ref={subject}
          className={subject_invalid ? style.form_error : style.form_input}
          placeholder="Enter Subject"
        />
      </div>
      <div>
        <label htmlFor="email">Email ID:</label>
        <INPUT
          onChange={(e) => {
            setState((preState) => {
              return {
                ...preState,
                email: {
                  value: e.target.value,
                  touch: true,
                  //eslint-disable-next-line
                  valid: !!e.target.value.match(
                    //eslint-disable-next-line
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
                  ),
                },
              };
            });
          }}
          onBlur={(e) =>
            setState((preState) => {
              return {
                ...preState,
                email: { ...preState.email, touch: true },
              };
            })
          }
          id="email"
          ref={email}
          value={state.email.value}
          type="email"
          className={email_invalid ? style.form_error : style.form_input}
          placeholder="Enter Your Email"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          onChange={(e) => {
            setState((preState) => {
              return {
                ...preState,
                message: {
                  value: e.target.value,
                  touch: true,
                  valid: e.target.value.length >= 30,
                },
              };
            });
          }}
          onBlur={(e) =>
            setState((preState) => {
              return {
                ...preState,
                message: { ...preState.message, touch: true },
              };
            })
          }
          placeholder="Write Your Message"
          ref={message}
          value={state.message.value}
          className={message_invalid ? style.textarea_error : style.textarea}
        ></textarea>
      </div>
      <Button
        type="submit"
        text="Submit Complain"
        className={style.complaint_submit}
      >
        {loading && <LoadingSpinner />} <p>Submit</p>
      </Button>
    </form>
  );
};

export default ComplaintForm;
