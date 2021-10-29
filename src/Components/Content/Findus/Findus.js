import style from "./Findus.module.css";
import ICONS from "../../../image/icons";
import PlacesAutocomplete from "react-places-autocomplete";
import React from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";

const Findus = () => {
  const [location, setLocation] = React.useState("");
  const [selected, setSelected] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);

  const handleChange = (val) => {
    setLocation(val);
    setSelected(false);
  };

  const handleSelect = (val) => {
    setLocation(val);
    setSelected(true);
    setShowLoading(true);
  };

  const renderFunction = ({
    getInputProps,
    suggestions,
    getSuggestionItemProps,
  }) => {
    return (
      <div className={style.findus}>
        <input
          {...getInputProps({ className: style.city_input })}
          placeholder="Search Your City"
        />
        <div className={style.search_result_section}>
          <div className={style.search_result_section_inner}>
            {suggestions.map((suggestion, idx) => {
              return (
                <div
                  key={idx}
                  {...getSuggestionItemProps(suggestion, {
                    className: style.search_result,
                  })}
                >
                  <span>
                    <i
                      style={{ color: "#212121" }}
                      className="fas fa-map-marker-alt"
                    ></i>{" "}
                    {suggestion.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const responseBox = (
    <div className={style.response_box}>
      <div className={style.icon}>
        <i className="fas fa-check-circle"></i>
      </div>
      <div className={style.response_text}>
        Yes! We are Available at{" "}
        <b>{`${location.length > 40 ? `${location.slice(0, 40)}...` : location}`}</b>
      </div>
    </div>
  );

  setTimeout(() => {
    setShowLoading(false);
  }, 500);

  return (
    <>
      <div id="findus" className={style.headline}>
        Find us in Your City
      </div>
      <PlacesAutocomplete
        value={location}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {renderFunction}
      </PlacesAutocomplete>
      <div className={style.or}>
        {selected && !showLoading && responseBox}
        {showLoading && <LoadingSpinner />}
      </div>
      <div className={style.headline}>
        Find us in Popular Cities Around the World
      </div>
      <div className={style.maincities}>
        <div className={style.cities}>
          <div className={style.city}>
            <img src={ICONS.beijing} alt="beijing" />
            <h4>Beijing, China</h4>
          </div>
          <div className={style.city}>
            <img src={ICONS.dubai} alt="dubai" />
            <h4>Dubai, UAE</h4>
          </div>
          <div className={style.city}>
            <img src={ICONS.ahmedabad} alt="ahmedabad" />
            <h4>Ahmedabad, India</h4>
          </div>
          <div className={style.city}>
            <img src={ICONS.berlin} alt="berlin" />
            <h4>Berlin, Germany</h4>
          </div>
        </div>
        <div className={style.cities}>
          <div className={style.city}>
            <img src={ICONS.newyork} alt="newyork" />
            <h4>New York, USA</h4>
          </div>
          <div className={style.city}>
            <img src={ICONS.singapore} alt="singapore" />
            <h4>Singapore</h4>
          </div>
          <div className={style.city}>
            <img src={ICONS.melbourne} alt="melbourne" />
            <h4>Melbourne, Australia</h4>
          </div>
          <div className={style.city}>
            <img src={ICONS.london} alt="london" />
            <h4>London, UK</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Findus;
