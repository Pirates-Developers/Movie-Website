import "./footer.css";
import { Link } from "react-router-dom";

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
          <Link to="/movies" className="footer-link">
            ფილმები
          </Link>
          <Link to="/tvshows" className="footer-link">
            სერიალები
          </Link>
          <Link to="/animes" className="footer-link">
            {window.innerWidth <= 425 ? "ანიმე" : "ანიმე/ანიმაციები"}
          </Link>
          <Link to="/aboutus" className="footer-link">
            ჩვენ შესახებ
          </Link>
          {window.innerWidth > 425 && (
            <Link to="/contact" className="footer-link">
              კონტაქტი
            </Link>
          )}
        </div>
        <div className="footer-social-links d-flex align-items-center justify-content-center">
          <Link
            to="https://web.telegram.org/a/#-1001801382759"
            target="_blank"
            className="footer-social-link d-flex justify-content-center align-items-center"
          >
            <img
              src="/assets/images/footer-img/Telegram.png"
              alt="telegram-icon"
            />
          </Link>
          <Link
            to="https://twitter.com/"
            target="_blank"
            className="footer-social-link d-flex justify-content-center align-items-center"
          >
            <img
              src="/assets/images/footer-img/Twitter.png"
              alt="twitter-icon"
            />
          </Link>
          <Link
            to="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            className="footer-social-link d-flex justify-content-center align-items-center"
          >
            <img src="/assets/images/footer-img/Gmail.png" alt="gmail-icon" />
          </Link>
        </div>
        <div className="copyright text-center">© Copyright 2022 - BSP</div>
      </div>
    </footer>
  );
}

export default Footer;
