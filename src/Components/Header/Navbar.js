import style from "./Navbar.module.css";
import MenuLink from "./Link";
import React from "react";
import NavMob from "./NavbarMobile";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { useLocation } from "react-router";

const Navbar = () => {
  const LinkScroll = Scroll.Link;

  const location = useLocation();
  const notComplaintPage =
    location.pathname !== "/complaint" && location.pathname !== "/pricing";

  return (
    <React.Fragment>
      <nav className={style.desktop_nav}>
        <div
          className={`animate__animated animate__bounceInLeft ${style.logo}`}
        >
          <Link to="/">
            Fastron
            <em>
              <strong>Delivery</strong>
            </em>
          </Link>
        </div>

        <ul
          className={`animate__animated animate__bounceInRight ${style.desktop_menu}`}
        >
          <MenuLink
            is_active={style.is_active}
            url="/"
            button={
              !notComplaintPage ? (
                <>
                  <i className="fas fa-angle-double-left"></i> Back
                </>
              ) : (
                <>
                  <i className="fas fa-home"></i> Home
                </>
              )
            }
          />
          {notComplaintPage && (
            <LinkScroll to="pricing" offset={-100} smooth={true} duration={800}>
              <li>
                <i className="fas fa-dollar-sign"></i> Pricing
              </li>
            </LinkScroll>
          )}
          {notComplaintPage && (
            <LinkScroll to="findus" offset={-100} smooth={true} duration={800}>
              <li>
                <i className="fas fa-map-marker-alt"></i> Find Us
              </li>
            </LinkScroll>
          )}
          {/* <MenuLink is_active={style.is_active} url="/pincode" button="Search Pincode" /> */}
          {notComplaintPage && (
            <MenuLink
              is_active={style.is_active}
              url="/complaint"
              button={
                <>
                  <i className="fas fa-edit"></i> Complaint
                </>
              }
            />
          )}
        </ul>
      </nav>
      <NavMob />
    </React.Fragment>
  );
};

export default Navbar;
