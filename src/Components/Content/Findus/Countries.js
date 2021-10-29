import style from "./Countries.module.css";
import AllCountries from "../../../Data/AllCountires";

const Countires = ({CountryName}) => {
  const handleChange = (e) => {
    CountryName(e.target.value)
  };

  return (
    <AllCountries handleChange={handleChange} className={style.custom_select} />
  );
};

export default Countires;
