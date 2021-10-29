import { NavLink } from "react-router-dom";
import { forwardRef } from "react";

const MenuLink = forwardRef(({ url, button, is_active}, ref) => {
  return (
    <NavLink ref={ref} exact to={url} activeClassName={is_active}>
      <li>{button}</li>
    </NavLink>
  );
});

export default MenuLink;
