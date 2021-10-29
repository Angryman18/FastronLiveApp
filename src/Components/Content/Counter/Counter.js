import style from "./Counter.module.css";
import { useCountUp } from "react-countup";
import React, { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Counter = () => {
  const happyCustomer = useRef(null);
  useCountUp({
    ref: happyCustomer,
    start: 0,
    end: 11659841,
    duration: 2,
  });

  const totalProducts = useRef(null);
  useCountUp({
    ref: totalProducts,
    start: 0,
    end: 85988591,
    duration: 2,
  });

  const totalCountries = useRef(null);
   useCountUp({
    ref: totalCountries,
    start: 0,
    end: 72,
    duration: 2,
  });

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={style.counter_main}>
      <div id={style.happy_customer} data-aos="fade-up">
        <i className="fas fa-handshake"></i>
        <h1 ref={happyCustomer}>11659841</h1>
        <span>Happy Customer</span>
      </div>
      <div id={style.total_prodcus} data-aos="fade-up">
        <i className="fas fa-archive"></i>
        <h1 ref={totalProducts}>85988591</h1>
        <span>Products Shipped</span>
      </div>
      <div id={style.countries} data-aos="fade-up">
        <i className="fas fa-globe-americas"></i>
        <h1 ref={totalCountries}>72</h1>
        <span>Countries</span>
      </div>
    </div>
  );
};

export default Counter;
