import "./Footer.css";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; 2024 Supersite, Powered by News API
        </p>
        <div className="footer__links">
          <a href="/" className="footer__link">Home</a>
          <a href="https://tripleten.com" className="footer__link" target="_blank" rel="noopener noreferrer">TripleTen</a>
          <a href="https://github.com" className="footer__social" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={githubIcon} alt="GitHub" width="20" height="20" />
          </a>
          <a href="https://linkedin.com" className="footer__social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
