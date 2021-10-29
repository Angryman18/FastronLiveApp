import style from "./NavMobile.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import MenuLink from "./Link";
import * as Scroll from "react-scroll";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavMob = () => {
  const [clicked, setClicked] = React.useState(false);

  const LinkScroll = Scroll.Link;
  const location = useLocation();
  const notInComplaintPage =
    location.pathname !== "/complaint" && location.pathname !== "/pricing";

  return (
    <div className={style.mobile_nav_main}>
      <nav className={style.mobile_nav}>
        <div
          className={`animate__animated animate__bounceInLeft ${style.mobile_logo}`}
        >
          <Link to="/">
            Fastron
            <em>
              <strong>Delivery</strong>
            </em>
          </Link>
        </div>

        <div
          className={`animate__animated animate__bounceInRight ${style.hamburger}`}
        >
          {!clicked && <FaBars onClick={() => setClicked(!clicked)} />}
          {clicked && <FaTimes onClick={() => setClicked(!clicked)} />}
        </div>
      </nav>
      <ul
        onClick={() => setClicked(!clicked)}
        className={clicked ? style.mobile_menu : style.hidden_menu}
      >
        <MenuLink
          is_active={style.is_active}
          url="/"
          button={
            !notInComplaintPage ? (
              <>
                <i className="fas fa-angle-double-left"></i> Back
              </>
            ) : (
              "Home"
            )
          }
        />
        {notInComplaintPage && (
          <LinkScroll
            onClick={() => setClicked(!clicked)}
            to="pricing"
            offset={-100}
            smooth={true}
            duration={800}
          >
            Pricing
          </LinkScroll>
        )}
        {notInComplaintPage && (
          <LinkScroll
            to="findus"
            offset={-100}
            smooth={true}
            duration={800}
            onClick={() => setClicked(!clicked)}
          >
            <li>Find Us</li>
          </LinkScroll>
        )}
        {notInComplaintPage && (
          <MenuLink
            is_active={style.is_active}
            url="/complaint"
            button="Complaint"
          />
        )}
      </ul>
    </div>
  );
};

export default NavMob;
