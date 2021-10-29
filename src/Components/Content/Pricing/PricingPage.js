import style from "./PricingPage.module.css";
import pricing_page_image from "../../../image/pricing_page.jpg";
import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import LoadingSpinner from "../../UI/LoadingSpinner";

const PricingPage = () => {
  const [location, setLocation] = React.useState({
    from: "",
    to: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(false);

  const onChangeHandlerFrom = (val) => {
    setLocation((pre) => {
      return { ...pre, from: val };
    });
  };

  const onChangeHandleTo = (val) => {
    setLocation((pre) => {
      return { ...pre, to: val };
    });
  };

  const renderFunctionFrom = ({
    getInputProps,
    suggestions,
    getSuggestionItemProps,
  }) => {
    return (
      <div className={style.from_input}>
        <div className={style.from_input_box}>
          <input
            {...getInputProps({
              className: style.from_main_input,
              placeholder: "Enter City, Town Etc",
              required: true,
            })}
          />
        </div>
        <div className={style.showSuggestions}>
          {suggestions.map((suggestion, idx) => {
            return (
              <div
                key={idx}
                {...getSuggestionItemProps(suggestion, {
                  className: style.suggestion_child,
                })}
              >
                <span>
                  <i
                    style={{ color: "#525252" }}
                    className="fas fa-map-marker-alt"
                  ></i>
                  {` ${suggestion.description}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(true);
  };

  setTimeout(() => {
    setLoading(false);
  }, 500);

  React.useEffect(() => {
    window.scrollTo({top: "0", left: "0", behavior: "smooth"})
    document.title = "Pricing for Shipment"
    return null;
  },[])

  return (
    <div className={style.pricing_main}>
      <div className={style.pricing_content}>
        <div id={style.page_heading}>Get the Best and Affordable Price for your Shipment</div>
        <div className={style.form_main}>
          <div className={style.image}>
            <img src={pricing_page_image} alt="pricingImage" />
          </div>
          <form onSubmit={submitHandler} className={style.form_contents}>
            <h3>From</h3>
            <PlacesAutocomplete
              value={location.from}
              onChange={onChangeHandlerFrom}
            >
              {renderFunctionFrom}
            </PlacesAutocomplete>

            <h3>To</h3>
            <PlacesAutocomplete value={location.to} onChange={onChangeHandleTo}>
              {renderFunctionFrom}
            </PlacesAutocomplete>

            <h4>Shipment Type</h4>
            <select required={true} className={style.shipment_type}>
              <option value="document">Document</option>
              <option value="box">Box</option>
              <option value="Envelepe">Envelepe</option>
              <option value="bag">Bag</option>
              <option value="carton">Carton</option>
            </select>
            <h4>Quantity (Nos)</h4>
            <div className={style.from_input}>
              <div className={style.from_input_box}>
                <input
                  required={true}
                  type="number"
                  defaultValue={1}
                  min={1}
                  step={1}
                  placeholder="Quantity"
                  className={style.from_main_input}
                />
              </div>
            </div>
            <h4>Weight in Gm</h4>
            <div className={style.from_input}>
              <div className={style.from_input_box}>
                <input
                  required={true}
                  type="number"
                  min="50"
                  step="1"
                  placeholder="Shipment Weight"
                  className={style.from_main_input}
                />
              </div>
            </div>
            <button type="submit" className={style.submit_pricing_button}>
              Submit
            </button>
            {loading && <LoadingSpinner />}
            {!loading && status && (
              <div className={style.submit_message}>
                Do you expect me to calculate international airport distance and
                totalize charges including quantity and weight? Damn bruh!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
