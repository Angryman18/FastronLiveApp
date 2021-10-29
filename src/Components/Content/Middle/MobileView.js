import MiddleLeft from "./MiddleLeft";
import style from "./View.module.css";
import IMAGES from "../../../image";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const displayMsg = {
  demo1: {
    heading: "Fast & Rush Delivery",
    Details: `We support over the 72 countries across the world and we are still
    continuing to grab far more in the globe. and we are passinate from
    the last 1 decade to fulfill out customer requirements.`,
  },
  demo2: {
    heading: "Cheap & Reliable Shipping",
    Details: `We offer shipping at the best valueable price which is really cheap in
     terms of other shipping agencies. we don't leave a single chance to damage any producs
      so to say trush you can put on us`,
  },
  demo3: {
    heading: "Responsibility & Support",
    Details: `We are among world's top 10 currier company which has strong customer support from
    the backend. Our customer portal is open for 24x7 to provide seamless support to our good
     cusotmers.`,
  },
  demo4: {
    heading: "Delivery on Time",
    Details: `We have track record of a total 95% produts of our lifetime has been ontime or 
    before the estimate delivery date. So we can assure your products delivery on time to any 
    country as per schedule.`,
  },
};

const MobileView = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const { demo1, demo2, demo3, demo4 } = displayMsg;
  return (
    <div className={style.mobile_view}>
      <div data-aos="fade-up">
        <MiddleLeft
          imageURL={IMAGES.a1}
          heading={demo1.heading}
          Details={demo1.Details}
        />
      </div>

      <div data-aos="fade-up">
        <MiddleLeft
          imageURL={IMAGES.a2}
          heading={demo2.heading}
          Details={demo2.Details}
        />
      </div>
      <div data-aos="fade-up">
        <MiddleLeft
          imageURL={IMAGES.a3}
          heading={demo3.heading}
          Details={demo3.Details}
        />
      </div>
      <div data-aos="fade-up">
        <MiddleLeft
          imageURL={IMAGES.a4}
          heading={demo4.heading}
          Details={demo4.Details}
        />
      </div>
    </div>
  );
};

export default MobileView;
