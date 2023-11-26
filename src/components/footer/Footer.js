import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer d-flex flex-column align-items-center">
      <div className="footer-border"></div>
      <div className="footer-brand-logo d-flex justify-content-center align-items-center">
        <img src="/Logo.svg" alt="brand-logo" />
      </div>
      <div className="footer-navigation">
        <div className="footer-links">
          <Link to="/" className="footer-link">
            მთავარი
          </Link>
          <Link to="/" className="footer-link">
            ფილმები
          </Link>
          <Link to="/" className="footer-link">
            სერიალები
          </Link>
          <Link to="/" className="footer-link">
            ანიმე/ანიმაციები
          </Link>
          <Link to="/" className="footer-link">
            ჩვენ შესახებ
          </Link>
          <Link to="/" className="footer-link">
            კონტაქტი
          </Link>
        </div>
        <div className="footer-social-links d-flex align-items-center justify-content-center">
          <Link
            to="/"
            className="footer-social-link d-flex justify-content-center align-items-center"
          >
            <img src="/assets/icons/Telegram.png" alt="telegram-icon" />
          </Link>
          <Link
            to="/"
            className="footer-social-link d-flex justify-content-center align-items-center"
          >
            <img src="/assets/icons/Twitter.png" alt="twitter-icon" />
          </Link>
          <Link
            to="/"
            className="footer-social-link d-flex justify-content-center align-items-center"
          >
            <img src="/assets/icons/Gmail.png" alt="gmail-icon" />
          </Link>
        </div>
        <div className="copyright text-center">© Copyright 2022 - BSP</div>
      </div>
    </footer>
  );
}

export default Footer;
