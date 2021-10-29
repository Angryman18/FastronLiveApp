import style from "./Background.module.css";
import Countires from "./Countries";
import React, { useState, useRef } from "react";

const Search = () => {
  const target = useRef();
  const country = useRef(null);
  const pin = useRef(null);

  const [touch, setTouch] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [value, setValue] = useState({
    country: "",
    pin: "",
  });

  const getCountry = (val) => {
    setValue((preState) => {
      return { ...preState, country: val };
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (!touch) {
      target.current.focus();
      target.current.className += ` ${style.error}`;
      return;
    } else if (validiation) {
      target.current.focus();
      target.current.className += ` ${style.error}`;
    } else if (touch && value.pin.length === 6 && value.country.length !== 0) {
      target.current.className = `${style.input}`;
      country.current = value.country;
      pin.current = value.pin;
      setIsSubmitted(true);
    }
  };

  React.useEffect(() => {
    setIsSubmitted(false);
  }, [value]);

  const validiation = touch && value.pin.length !== 6;
  const availableMsg = (
    <>
      <i className="fas fa-check"></i> Yes! We are Available in {country.current} at{" "}
      {pin.current}
    </>
  );

  return (
    <div id="search" className={style.background_main}>
      <div className={style.background_middle}>
        <div className={style.background_content}>
          <p>Select Your Country: </p>
          <Countires CountryName={getCountry} />
          <label htmlFor="pincode">
            <input
              ref={target}
              className={`${style.input} ${validiation && style.error}`}
              onBlur={() => setTouch(true)}
              onChange={(e) =>
                setValue((preState) => {
                  return { ...preState, pin: e.target.value };
                })
              }
              type="text"
              placeholder="Enter ZIP Code"
            />
          </label>
          <button onClick={onClickHandler}>Search</button>
        </div>
        <h3>{isSubmitted && availableMsg}</h3>
      </div>
    </div>
  );
};

export default Search;
