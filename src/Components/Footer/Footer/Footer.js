import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_main}>
        <div className={style.footer_front}>
          <h3>@FastronDelivery 2021</h3>
        </div>
        <div className={style.footer_middle}>
          <h3>Quick Links</h3>
          <hr />
          <ul>
            <a href="#!">Contact</a>
            <a href="#!">Career</a>
            <a href="#!">Terms and Policy</a>
            <a href="#!">Customer Support</a>
          </ul>
        </div>
        <div className={style.footer_end}>
          <h3>Social Links</h3>
          <hr />
          <ul>
            <span>
              <i className="fab fa-github"></i>
            </span>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-linkedin-in"></i>
            </span>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
          </ul>
        </div>
      </div>
      <div className={style.credits}> 
        <span>
          Designed and Maintained by{" "}
          <a
            href="https://www.facebook.com/Imsmahanta"
            target="_blank"
            rel="noreferrer"
          >
            Shyam Mahanta
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
