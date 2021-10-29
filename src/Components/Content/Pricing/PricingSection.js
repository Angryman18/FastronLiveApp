import style from "./PricingSection.module.css";
import pricing from "../../../image/pricing.jpg";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className={style.pricing_main} id="pricing">
      <img src={pricing} alt="pricing" />
      <div className={style.shadow}></div>
      <div className={style.pricing_section}>
        <div id={style.column}>
          <section>
            <div className={style.section_border}>
              <h1>
                Get the Best Affordable Pricing for Shipment Around the World
              </h1>
              <p>
                We offer the best and affordable price for any kind of shipment
                across the 72 countries of the globe.
              </p>
              <div>
              <Link to="/pricing">
                <button className={style.calculate_button}>Calculate Pricing</button>
              </Link>
              </div>
            </div>
          </section>
        </div>
        {/* <div id={style.column}></div> */}
      </div>
    </div>
  );
};

export default Pricing;
